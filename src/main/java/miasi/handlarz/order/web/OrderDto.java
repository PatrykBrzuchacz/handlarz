package miasi.handlarz.order.web;

import lombok.Getter;
import lombok.Setter;
import miasi.handlarz.order.OrderStatus;
import miasi.handlarz.product.web.dto.ProductDto;
import miasi.handlarz.regularclient.web.RegularClientDto;
import miasi.handlarz.security.web.dto.UserDto;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class OrderDto {
    private Long id;
    private List<ProductOrderDto> products;
    private RegularClientDto regularClient;
    private UserDto userDto;
    private float price;
    private LocalDateTime createdDate;
    private OrderStatus status;
}
