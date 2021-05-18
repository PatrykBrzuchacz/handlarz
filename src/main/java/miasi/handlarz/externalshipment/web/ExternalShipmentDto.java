package miasi.handlarz.externalshipment.web;

import lombok.Getter;
import lombok.Setter;
import miasi.handlarz.product.web.dto.ProductDto;

import java.time.LocalDateTime;

@Getter
@Setter
public class ExternalShipmentDto {
    private Long id;
    private String documentNr;
    private LocalDateTime issueDate;
    private LocalDateTime admissionDate;
    private String username;
    private ProductDto product;
    private float price;
    private int amount;
}
