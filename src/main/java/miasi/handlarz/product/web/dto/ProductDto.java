package miasi.handlarz.product.web.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductDto {
    private Long id;
    private String name;
    private String manufacturer;
    private int amount;
    private float price;
    private String ean;
    private String sku;
    private int vat;
    private String username;
}
