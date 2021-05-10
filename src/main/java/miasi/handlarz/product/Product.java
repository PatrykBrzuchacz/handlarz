package miasi.handlarz.product;

import lombok.Getter;
import lombok.Setter;
import miasi.handlarz.user.User;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "h_product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String manufacturer;
    private int amount;
    private float price;
    private String ean;
    private String sku;
    private int vat;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
}
