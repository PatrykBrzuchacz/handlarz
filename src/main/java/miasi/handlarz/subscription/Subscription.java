package miasi.handlarz.subscription;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "h_subscription")
@Getter
@Setter
public class Subscription {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private int price;

    @Column(name = "from_orders")
    private int fromOrders;

    @Column(name = "to_orders")
    private int toOrders;

}
