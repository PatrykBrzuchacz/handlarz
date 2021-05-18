package miasi.handlarz.regularclient.web;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RegularClientDto {

    private Long id;
    private String username;
    private String firstName;
    private String lastName;
    private String nip;
    private String city;
    private String street;
    private String streetNumber;
    private String houseNumber;
    private String phoneNumber;
    private String email;
    private String companyName;

}
