package miasi.handlarz.invoice;

import miasi.handlarz.invoice.web.InvoiceCriteria;
import miasi.handlarz.invoice.web.InvoiceDto;
import miasi.handlarz.order.Order;
import miasi.handlarz.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class InvoiceService {

    @Autowired
    private InvoiceRepository repository;
    @Autowired
    private InvoiceAssembler assembler;
    @Autowired
    private UserService userService;

    public Page<InvoiceDto> find(InvoiceCriteria criteria) {
        return repository.findAll(new InvoiceSpec(criteria), criteria.toPageRequest()).map(assembler::map);
    }

    private static final String EVERY_4_MINUTES = "0 * * * * *";
    private static final String EVERY_1_ST_DAY_OF_MONTH = "0 0 0 1 1/1 *";

    @Scheduled(cron = EVERY_1_ST_DAY_OF_MONTH)
    @Transactional
    public void createAdminInvoices() {
        System.out.println("SCHEDULER RUN " + LocalDateTime.now());
        List<Invoice> invoices = new ArrayList();

        userService.findAll().forEach(it -> {
            if (it.getSubscription() != null) {

                Invoice invoice = new Invoice();
                invoice.setInvoiceNumber("S " + it.getUsername() + "-" + LocalDateTime.now().getMonthValue() + "-" + LocalDateTime.now().getYear());
                invoice.setCreatedDate(LocalDateTime.now());
                invoice.setUser(it);
                invoice.setPrice(it.getSubscription().getPrice());
                invoice.setType(InvoiceType.ADMIN);

                invoices.add(invoice);
            }

        });

        repository.saveAll(invoices);
    }


    public Invoice createInvoiceFromOrder(Order order) {
        Invoice invoice = new Invoice();
        invoice.setInvoiceNumber(order.getWzNumber().replace("WZ", "H "));
        invoice.setCreatedDate(order.getWzCreatedDate());
        invoice.setOrder(order);
        invoice.setUser(order.getUser());
        invoice.setPrice(order.getFinalPrice());
        invoice.setType(InvoiceType.ORDER);

        return invoice;
    }

}
