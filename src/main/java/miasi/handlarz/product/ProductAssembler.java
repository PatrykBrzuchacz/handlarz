package miasi.handlarz.product;

import miasi.handlarz.product.web.dto.ProductDto;
import org.springframework.stereotype.Component;

@Component
public class ProductAssembler {

    public ProductDto map(Product product) {
        ProductDto dto = new ProductDto();
        dto.setId(product.getId());
        dto.setAmount(product.getAmount());
        dto.setEan(product.getEan());
        dto.setManufacturer(product.getManufacturer());
        dto.setPrice(product.getPrice());
        dto.setName(product.getName());
        dto.setSku(product.getSku());
        dto.setVat(product.getVat());

        return dto;
    }

    public Product update(ProductDto dto, Product product) {
        product.setManufacturer(dto.getManufacturer());
        product.setAmount(dto.getAmount());
        product.setPrice(dto.getPrice());
        product.setEan(dto.getEan());
        product.setName(dto.getName());
        product.setVat(dto.getVat());
        product.setSku(dto.getSku());

        return product;
    }
}
