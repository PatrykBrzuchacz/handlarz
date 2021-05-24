package miasi.handlarz.order;

import miasi.handlarz.order.web.OrderDto;
import miasi.handlarz.order.web.ProductOrderDto;
import miasi.handlarz.product.ProductAssembler;
import miasi.handlarz.regularclient.RegularClientAssembler;
import miasi.handlarz.user.UserAssembler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

@Component
public class OrderAssembler {

    @Autowired
    private UserAssembler userAssembler;
    @Autowired
    private ProductAssembler productAssembler;
    @Autowired
    private RegularClientAssembler regularClientAssembler;

    public OrderDto map(Order order) {
        OrderDto dto = new OrderDto();
        dto.setId(order.getId());
        dto.setCreatedDate(order.getCreatedDate());
        dto.setWzCreatedDate(order.getWzCreatedDate());
        dto.setWzNumber(order.getWzNumber());
        dto.setPrice(order.getFinalPrice());
        dto.setUserDto(userAssembler.map(order.getUser()));
        dto.setProducts(order.getProductOrders().stream().map(this::map).collect(Collectors.toList()));
        dto.setStatus(order.getOrderStatus());
        dto.setOrderNumber(order.getOrderNumber());
        dto.setClient(regularClientAssembler.map(order.getRegularClient()));

        return dto;
    }

    public ProductOrderDto map(ProductOrder productOrder) {
        ProductOrderDto dto = new ProductOrderDto();
        dto.setProduct(productAssembler.map(productOrder.getProduct()));
        dto.setAmount(productOrder.getAmount());
        return dto;
    }
}
