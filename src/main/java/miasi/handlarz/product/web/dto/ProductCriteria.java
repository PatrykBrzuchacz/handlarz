package miasi.handlarz.product.web.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import miasi.handlarz.shared.dto.SearchRequestDto;

@Getter
@NoArgsConstructor
public class ProductCriteria extends SearchRequestDto {
    private String username;
}
