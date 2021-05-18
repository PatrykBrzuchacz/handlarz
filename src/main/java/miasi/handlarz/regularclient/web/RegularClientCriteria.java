package miasi.handlarz.regularclient.web;

import lombok.Getter;
import miasi.handlarz.shared.dto.SearchRequestDto;

@Getter
public class RegularClientCriteria extends SearchRequestDto {
    private String username;
}
