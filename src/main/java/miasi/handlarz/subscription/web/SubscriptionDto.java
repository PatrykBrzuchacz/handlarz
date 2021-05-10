package miasi.handlarz.subscription.web;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SubscriptionDto {
    private Long id;
    private String name;
    private int price;
    private int fromOrders;
    private int toOrders;
}
