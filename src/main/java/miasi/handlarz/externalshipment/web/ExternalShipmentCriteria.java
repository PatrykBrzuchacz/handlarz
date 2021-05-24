package miasi.handlarz.externalshipment.web;

import lombok.Getter;
import miasi.handlarz.product.web.dto.ProductDto;
import miasi.handlarz.shared.dto.SearchRequestDto;

@Getter
public class ExternalShipmentCriteria extends SearchRequestDto {
    private String username;
    private String documentNumber;
    private ProductDto product;
}
