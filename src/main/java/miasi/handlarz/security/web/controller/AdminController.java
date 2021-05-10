package miasi.handlarz.security.web.controller;

import miasi.handlarz.security.web.dto.UserCriteria;
import miasi.handlarz.security.web.dto.UserDto;
import miasi.handlarz.security.web.dto.UserStatusChangeDto;
import miasi.handlarz.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class AdminController {

    @Autowired
    private UserService userService;

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping
    public Page<UserDto> getAllUsers(@RequestBody UserCriteria userCriteria) {
        return userService.getAllUsers(userCriteria);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PutMapping("/change-active")
    public UserDto changeActive(@RequestBody UserStatusChangeDto dto) {
        return userService.updateUserActive(dto.getId(), dto.isActive() );
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PutMapping("/change-request")
    public UserDto changeRequest(@RequestBody UserStatusChangeDto dto) {
        return userService.updateUserRequest(dto.getId(), dto.getStatus());
    }

}