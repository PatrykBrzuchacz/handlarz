package miasi.handlarz.security.repository;


import miasi.handlarz.security.model.Role;
import miasi.handlarz.security.model.RoleName;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends CrudRepository<Role, Long> {

    Role findByName(RoleName name);
}
