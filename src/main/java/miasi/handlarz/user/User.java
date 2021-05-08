package miasi.handlarz.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import miasi.handlarz.security.model.RequestStatus;
import miasi.handlarz.security.model.Role;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "h_user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NonNull
    private Long id;

    @NonNull
    private String username;

    @JsonIgnore
    @NonNull
    private String password;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    private boolean active;

    @DateTimeFormat(pattern = "yyyy-MM-dd hh:mm")
    private LocalDateTime registered;

    @Column(name = "last_login")
    @DateTimeFormat(pattern = "yyyy-MM-dd hh:mm")
    private LocalDateTime lastLogin;

    @JsonIgnore
    @ManyToOne
    @NonNull
    @JoinColumn(name = "id_role")
    private Role role;

    private String email;

    @Column(name = "phone_number")
    private String phoneNumber;

    private String nip;
    private String city;
    private String street;
    private String houseNumber;
    private String streetNumber;

    @Enumerated(value = EnumType.STRING)
    private RequestStatus requestStatus;
}
