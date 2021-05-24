package miasi.handlarz.order.web;

import lombok.Getter;
import lombok.Setter;
import miasi.handlarz.order.OrderStatus;

@Getter
@Setter
public class OrderChangeStatusDto {

    private Long orderId;
    private OrderStatus orderStatus;
}
