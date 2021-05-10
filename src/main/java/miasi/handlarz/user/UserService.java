package miasi.handlarz.user;

import miasi.handlarz.security.model.RequestStatus;
import miasi.handlarz.security.web.dto.UserCriteria;
import miasi.handlarz.security.web.dto.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.regex.Pattern;

@Service
public class UserService {

    private static final Pattern pattern = Pattern.compile("-?\\d+(\\.\\d+)?");

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserAssembler userAssembler;

    public Page<UserDto> getAllUsers(UserCriteria userCriteria) {
        UserSpec spec = new UserSpec(userCriteria);
       return userRepository.findAll(spec, userCriteria.toPageRequest()).map(it->userAssembler.map(it));
    }

    public UserDto getUser(Long id) {
        return userAssembler.map(findEntity(id));
    }

    public User findEntity(Long id) { return userRepository.getOne(id); }

    public UserDto getUserByUsername(String username) {
        return userAssembler.map(userRepository.findByUsername(username));
    }

    public User findEntityByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Transactional
    public UserDto updateUserRequest(Long id, RequestStatus requestStatus) {
        User user = findEntity(id);
        user.setRequestStatus(requestStatus);
        user.setActive(requestStatus.equals(RequestStatus.ACCEPTED));
        return userAssembler.map(user);
    }

    public boolean isNumeric(String strNum) {
        if (strNum == null) {
            return false;
        }
        return pattern.matcher(strNum).matches();
    }

    @Transactional
    public UserDto updateUserActive(Long id, boolean newActiveStatus) {
        User user = findEntity(id);
        user.setActive(newActiveStatus);
        return userAssembler.map(user);
    }
}

