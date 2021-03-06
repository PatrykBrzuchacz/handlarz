package miasi.handlarz.security.service;

import miasi.handlarz.user.User;
import miasi.handlarz.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class SecurityUserHelper {

    @Autowired
    private UserRepository userRepository;

    public String getLoggedUserUsername() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication == null)
            return null;

        Object principal = authentication.getPrincipal();

        if (principal.getClass() == UserDetails.class)
            return ((UserDetails) principal).getUsername();

        if (principal.getClass() == String.class)
            return principal.toString();

        return null;
    }


    public User getLoggedUser() {
        return userRepository.findByUsername(getLoggedUserUsername());
    }


}
