package miasi.handlarz.invoice;

import lombok.Getter;
import lombok.Setter;
import miasi.handlarz.order.Order;
import miasi.handlarz.user.User;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@Table(name = "h_invoice")
@Entity
public class Invoice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JoinColumn(name = "order_id")
    @OneToOne(cascade = CascadeType.ALL)
    private Order order;

    @ManyToOne(cascade = CascadeType.ALL)
    private User user;

    @Column(name = "invoice_number")
    private String invoiceNumber;

    @Column(name = "created_date")
    @DateTimeFormat(pattern = "yyyy-MM-dd hh:mm")
    private LocalDateTime createdDate;

    @Enumerated(value = EnumType.ORDINAL)
    private InvoiceType type;

    private float price;

}


