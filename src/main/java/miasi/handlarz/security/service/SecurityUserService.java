package miasi.handlarz.security.service;

import miasi.handlarz.security.model.RequestStatus;
import miasi.handlarz.security.web.dto.UserCredentialsDto;
import miasi.handlarz.security.web.dto.UserDto;
import miasi.handlarz.security.web.securityException.UsernameAlreadyExistsException;
import miasi.handlarz.user.User;
import miasi.handlarz.user.UserAssembler;
import miasi.handlarz.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Service
public class SecurityUserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleService roleService;
    @Autowired
    private SecurityUserHelper securityUserHelper;
    @Autowired
    private BCryptPasswordEncoder bcryptEncoder;
    @Autowired
    private UserAssembler userAssembler;

    public UserDetails loadUserByUsername(String username) {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("Invalid username or password.");
        }
        if (!user.isActive() || user.getRequestStatus().equals(RequestStatus.DECLINED)) {
            throw new UsernameNotFoundException("Your account is inactive");
        }
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), getAuthority(user));
    }

    public Set<SimpleGrantedAuthority> getAuthority(User user) {
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
        authorities.add(new SimpleGrantedAuthority(user.getRole().getName().toString()));

        return authorities;
    }

    public User createUser(UserCredentialsDto user) {
        User newUser = assignUserData(user);
        return userRepository.save(newUser);
    }

    private void checkUsername(String username) {
        boolean usernameExists = userRepository.existsUserByUsername(username);

        if (usernameExists) throw new UsernameAlreadyExistsException();
    }

    public UserDto getLoggedUser() {
        return userAssembler.map(securityUserHelper.getLoggedUser());
    }

    public User assignUserData(UserCredentialsDto dto) {
        checkUsername(dto.getUsername());

        User newUser = new User();
        newUser.setUsername(dto.getUsername());
        newUser.setPassword(bcryptEncoder.encode(dto.getPassword()));
        newUser.setRole(roleService.getUserRole());
        newUser.setRegistered(LocalDateTime.now());
        newUser.setRequestStatus(RequestStatus.SENDED);
        newUser.setNip(dto.getNip());

        return newUser;
    }
}

