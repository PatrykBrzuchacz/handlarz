package miasi.handlarz.security.web.controller;

import miasi.handlarz.security.model.RequestStatus;
import miasi.handlarz.security.service.SecurityUserService;
import miasi.handlarz.security.web.dto.UserDto;
import miasi.handlarz.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class AdminController {

    @Autowired
    private SecurityUserService securityUserService;
    @Autowired
    private UserService userService;

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping
    public Page<UserDto> getAllUsers(Pageable pageable) {
        return userService.getAllUsers(pageable);
    }


    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PutMapping("/{userId}/ban")
    public ResponseEntity<?> banAccount(@PathVariable("userId") Long id) {
        securityUserService.banUser(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PutMapping("/{userId}/unban")
    public ResponseEntity<?> unbanAccount(@PathVariable("userId") Long id) {
        securityUserService.unbanUser(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PutMapping("/{userId}/update-request")
    public ResponseEntity<?> updateUserRequest(@PathVariable("userId") Long id, @RequestParam("status") RequestStatus requestStatus) {
        userService.updateUserRequest(id, requestStatus);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}