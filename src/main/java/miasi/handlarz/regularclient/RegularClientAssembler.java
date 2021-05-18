package miasi.handlarz.regularclient;

import miasi.handlarz.regularclient.web.RegularClientDto;
import org.springframework.stereotype.Component;

@Component
public class RegularClientAssembler {

    public RegularClientDto map(RegularClient regularClient) {
        RegularClientDto dto = new RegularClientDto();

        dto.setId(regularClient.getId());
        dto.setNip(regularClient.getNip());
        dto.setCity(regularClient.getCity());
        dto.setEmail(regularClient.getEmail());
        dto.setCompanyName(regularClient.getCompanyName());
        dto.setFirstName(regularClient.getFirstName());
        dto.setHouseNumber(regularClient.getHouseNumber());
        dto.setStreet(regularClient.getStreet());
        dto.setStreetNumber(regularClient.getStreetNumber());
        dto.setPhoneNumber(regularClient.getPhoneNumber());
        dto.setLastName(regularClient.getLastName());

        return dto;
    }
}
