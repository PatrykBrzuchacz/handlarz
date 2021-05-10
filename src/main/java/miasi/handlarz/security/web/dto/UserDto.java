package miasi.handlarz.security.web.dto;

import lombok.Getter;
import lombok.Setter;
import miasi.handlarz.security.model.RequestStatus;

@Getter
@Setter
public class UserDto {
    private Long id;
    private String firstName;
    private String lastName;
    private String nip;
    private String city;
    private String street;
    private String houseNumber;
    private String streetNumber;
    private String phoneNumber;
    private String email;
    private boolean active;
    private RequestStatus requestStatus;
    private String username;
}
