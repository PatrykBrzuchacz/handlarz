package miasi.handlarz.security.service;

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
import org.springframework.transaction.annotation.Transactional;

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
        if (user.isActive()) {
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


    public User assignUserData(UserCredentialsDto user) {
        checkUsername(user.getUsername());

        User newUser = new User();
        newUser.setUsername(user.getUsername());
        newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
        newUser.setRole(roleService.getUserRole());
        newUser.setRegistered(LocalDateTime.now());
        return newUser;
    }

    private void checkUsername(String username) {
        boolean usernameExists = userRepository.existsUserByUsername(username);

        if (usernameExists) throw new UsernameAlreadyExistsException();
    }

    @Transactional
    public void deleteUser(Long id) {
        User user = userRepository.getOne(id);

        if (user == null || !user.isActive()) {
            throw new UsernameNotFoundException("User doesn't exist");
        }
        user.setActive(false);
    }

    @Transactional
    public void banUser(Long id) {
        User user = userRepository.getOne(id);

        if (user.isActive()) {
            throw new UsernameNotFoundException("User doesn't exist or its actually banned");
        }
        user.setActive(true);
    }
    @Transactional
    public void unbanUser(Long id) {
        User user = userRepository.getOne(id);

        if (!user.isActive()) {
            throw new UsernameNotFoundException("User doesn't exists or itsnt actually banned");
        }
        user.setActive(false);
    }

    public UserDto getLoggedUser() {
        return userAssembler.toDto(securityUserHelper.getLoggedUser());
    }

    public void createRequestToSignup(UserCredentialsDto userCredentialsDto) {

    }
}

