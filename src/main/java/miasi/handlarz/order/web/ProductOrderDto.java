package miasi.handlarz.order.web;

import lombok.Getter;
import lombok.Setter;
import miasi.handlarz.product.web.dto.ProductDto;

@Getter
@Setter
public class ProductOrderDto {
    private ProductDto product;
    private int amount;
}
