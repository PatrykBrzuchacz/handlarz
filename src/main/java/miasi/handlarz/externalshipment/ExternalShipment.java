package miasi.handlarz.externalshipment;

import lombok.Getter;
import lombok.Setter;
import miasi.handlarz.product.Product;
import miasi.handlarz.user.User;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table(name = "h_external_shipment")
public class ExternalShipment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//    @Column(name = "document_number")
//    private String documentNumber;

    @Column(name = "issue_date")
    private LocalDateTime issueDate;

    @Column(name = "admission_date")
    private LocalDateTime admissionDate;

    @JoinColumn(name = "user_id")
    @ManyToOne
    private User user;

    @JoinColumn(name = "product_id")
    @ManyToOne
    private Product product;

    private float price;
    private int amount;

}
