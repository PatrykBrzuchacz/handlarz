package miasi.handlarz.security.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import miasi.handlarz.user.User;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@AllArgsConstructor
@Getter
@Setter
@Table(name = "h_role")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Enumerated(value = EnumType.STRING)
    private RoleName name;

    private String description;

    @OneToMany(mappedBy = "role", cascade = CascadeType.ALL)
    private List<User> users = new ArrayList<>();

    public Role() {
    }

    public Role(long id, RoleName name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

}
