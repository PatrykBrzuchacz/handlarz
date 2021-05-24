package miasi.handlarz.invoice;

import miasi.handlarz.invoice.web.InvoiceDto;
import miasi.handlarz.order.OrderAssembler;
import miasi.handlarz.user.UserAssembler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class InvoiceAssembler {

    @Autowired
    private UserAssembler userAssembler;
    @Autowired
    private OrderAssembler orderAssembler;

    public InvoiceDto map(Invoice invoice) {
        InvoiceDto dto = new InvoiceDto();
        dto.setCreatedDate(invoice.getCreatedDate());
        dto.setPrice(invoice.getPrice());
        dto.setId(invoice.getId());
        if (invoice.getOrder() != null) {
            dto.setOrder(orderAssembler.map(invoice.getOrder()));
        }
        dto.setType(invoice.getType());
        dto.setInvoiceNumber(invoice.getInvoiceNumber());
        dto.setUser(userAssembler.map(invoice.getUser()));

        return dto;
    }
}
