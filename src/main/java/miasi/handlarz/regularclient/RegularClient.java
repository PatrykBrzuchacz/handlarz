package miasi.handlarz.regularclient;

import lombok.Data;
import miasi.handlarz.user.User;

import javax.persistence.*;

@Entity
@Data
@Table(name = "h_regular_client")
public class RegularClient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    private String nip;
    private String city;
    private String street;
    private String email;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "company_name")
    private String companyName;

    @Column(name = "house_number")
    private String houseNumber;

    @Column(name = "street_number")
    private String streetNumber;

    @JoinColumn(name = "user_id")
    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

}
