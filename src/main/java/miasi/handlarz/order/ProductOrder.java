package miasi.handlarz.order;

import lombok.Getter;
import lombok.Setter;
import miasi.handlarz.product.Product;

import javax.persistence.*;

@Entity
@Table(name = "h_product_order")
@Getter
@Setter
public class ProductOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    private int amount;
}
