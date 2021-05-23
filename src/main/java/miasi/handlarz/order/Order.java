package miasi.handlarz.order;

import lombok.Getter;
import lombok.Setter;
import miasi.handlarz.invoice.Invoice;
import miasi.handlarz.regularclient.RegularClient;
import miasi.handlarz.user.User;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Table(name = "h_order")
@Entity
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JoinColumn(name = "user_id")
    @ManyToOne
    private User user;

    @JoinColumn(name = "client_id")
    @ManyToOne
    private RegularClient regularClient;

    @Column(name = "created_date")
    @DateTimeFormat(pattern = "yyyy-MM-dd hh:mm")
    private LocalDateTime createdDate;

    @Enumerated(value = EnumType.STRING)
    @Column(name = "order_status")
    private OrderStatus orderStatus;

    @Column(name = "final_price")
    private float finalPrice;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<ProductOrder> productOrders = new ArrayList();

    @Column(name = "wz_created_date")
    @DateTimeFormat(pattern = "yyyy-MM-dd hh:mm")
    private LocalDateTime wzCreatedDate;

    @Column(name = "order_number")
    private String orderNumber;

    @Column(name = "wz_number")
    private String wzNumber;

    @OneToOne
    private Invoice invoice;
}
