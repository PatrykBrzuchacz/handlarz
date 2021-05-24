package miasi.handlarz.order;

import miasi.handlarz.invoice.InvoiceService;
import miasi.handlarz.order.web.*;
import miasi.handlarz.product.Product;
import miasi.handlarz.product.ProductService;
import miasi.handlarz.regularclient.RegularClient;
import miasi.handlarz.regularclient.RegularClientRepository;
import miasi.handlarz.regularclient.RegularClientService;
import miasi.handlarz.user.User;
import miasi.handlarz.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.TemporalAdjusters;
import java.util.stream.Collectors;

@Service
public class OrderService {

    @Autowired
    private OrderRepository repository;
    @Autowired
    private OrderAssembler assembler;
    @Autowired
    private InvoiceService invoiceService;
    @Autowired
    private RegularClientService regularClientService;
    @Autowired
    private UserService userService;
    @Autowired
    private ProductService productService;

    public Page<OrderDto> find(OrderCriteria criteria) {
        return repository.findAll(new OrderSpec(criteria), criteria.toPageRequest()).map(assembler::map);
    }

    @Transactional
    public OrderDto add(OrderDto dto) {
        Order order = update(new Order(), dto);
        order.setOrderNumber(getOrderNumber("Z ", order.getUser().getId()));

        repository.save(order);

        return assembler.map(order);
    }

    @Transactional
    public OrderDto changeStatus(Long orderId, OrderStatus orderStatus) {
        Order order = repository.getOne(orderId);
        order.setOrderStatus(orderStatus);
        if (order.getOrderStatus().equals(OrderStatus.ACCEPTED)) {
            order.setWzCreatedDate(LocalDateTime.now());
            order.setWzNumber(order.getOrderNumber().replace("Z", "WZ"));
            order.setInvoice(invoiceService.createInvoiceFromOrder(order));
        } else {
            order.getProductOrders().forEach(it -> it.getProduct().setAmount(it.getProduct().getAmount() + it.getAmount()));
        }

        return assembler.map(order);
    }

    private Order update(Order order, OrderDto dto) {
        User user = userService.findEntityByUsername(dto.getUsername());

        int limit = repository.countByUser_IdAndCreatedDateBetween(user.getId(),
                LocalDateTime.now().with(TemporalAdjusters.firstDayOfMonth()),
                LocalDateTime.now().with(TemporalAdjusters.lastDayOfMonth()));
        if (user.getSubscription() == null) {
            throw new NotSelectedSubscription();
        }
        if (user.getSubscription().getToOrders() < limit + 1) {
            throw new NotEnoughSubLimit();
        }
        order.setUser(user);
        order.setOrderStatus(OrderStatus.PENDING);
        order.setCreatedDate(LocalDateTime.now());

        RegularClient regularClient = dto.getClient().getId() != null ? regularClientService.findEntity(dto.getClient().getId()) :
                regularClientService.update(dto.getClient(), new RegularClient());


        order.setRegularClient(regularClient);
        order.setProductOrders(dto.getProducts().stream().map(it -> createProductOrder(it, order)).collect(Collectors.toList()));

        float finalPrice = 0;
        for (int i = 0; i < order.getProductOrders().size(); i++) {
            finalPrice = finalPrice + order.getProductOrders().get(i).getProduct().getPrice() * order.getProductOrders().get(i).getAmount();
        }

        order.setFinalPrice(finalPrice);

        return order;
    }

    @Transactional
    public ProductOrder createProductOrder(ProductOrderDto dto, Order order) {
        ProductOrder productOrder = new ProductOrder();
        Product product = productService.findEntity(dto.getProduct().getId());
        if (product.getAmount() >= dto.getAmount()) {
            product.setAmount(product.getAmount() - dto.getAmount());
            productOrder.setProduct(product);
        } else {
            throw new NotEnoughProductAmount();
        }
        productOrder.setOrder(order);
        productOrder.setAmount(dto.getAmount());

        return productOrder;
    }

    private String getOrderNumber(String prefix, Long userId) {
        return prefix + (repository.countByUser_IdAndCreatedDateBetween(userId,
                LocalDateTime.now().with(TemporalAdjusters.firstDayOfMonth()),
                LocalDateTime.now().with(TemporalAdjusters.lastDayOfMonth())) + 1)
                + "/" +
                LocalDate.now().getMonthValue() + "-" + LocalDate.now().getYear();
    }
}
