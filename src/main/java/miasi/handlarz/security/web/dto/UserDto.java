package miasi.handlarz.security.web.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDto {
    private String firstName;
    private String lastName;
    private String nip;
    private String city;
    private String street;
    private String houseNumber;
    private String streetNumber;
    private String phoneNumber;
    private String email;
}
