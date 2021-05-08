package miasi.handlarz.security.service;

import miasi.handlarz.security.model.Role;
import miasi.handlarz.security.model.RoleName;
import miasi.handlarz.security.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleService {

    @Autowired
    private RoleRepository roleRepository;

    public Role getUserRole() {
        return roleRepository.findByName(RoleName.ROLE_USER);
    }

}
