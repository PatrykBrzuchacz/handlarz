package miasi.handlarz.user;


import miasi.handlarz.security.web.dto.UserCredentialsDto;
import miasi.handlarz.security.service.SecurityUserService;
import miasi.handlarz.security.web.dto.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private SecurityUserService securityUserService;
    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<?> createRequest(@RequestBody UserCredentialsDto userCredentialsDto) {
        securityUserService.createRequestToSignup(userCredentialsDto);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/getLoggedUser")
    public UserDto getLoggedUserWithPlayingFields() {
        return securityUserService.getLoggedUser();
    }

    @GetMapping("/{id}")
    public UserDto getUser(@PathVariable("id") Long id) {
        return userService.getUser(id);
    }

    @PostMapping("/byUsername")
    public UserDto getUserByUsername(@RequestParam("username") String username) {
        return userService.getUserByUsername(username);
    }

}
