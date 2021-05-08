package miasi.handlarz.user;

import miasi.handlarz.security.web.dto.UserDto;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class UserAssembler {

    public List<UserDto> toDto(List<User> users) {
        return users.stream().map(this::toDto).collect(Collectors.toList());
    }

    public UserDto toDto(User user) {
        UserDto dto = new UserDto();
        dto.setFirstName(user.getFirstName());
        dto.setLastName(user.getLastName());
        dto.setCity(user.getCity());
        dto.setStreet(user.getStreet());
        dto.setEmail(user.getEmail());
        dto.setNip(user.getNip());
        dto.setHouseNumber(user.getHouseNumber());
        dto.setStreetNumber(user.getStreetNumber());
        dto.setPhoneNumber(user.getPhoneNumber());
        return dto;
    }


}
