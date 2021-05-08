package miasi.handlarz.user;

import miasi.handlarz.security.model.RequestStatus;
import miasi.handlarz.security.web.dto.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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

    public Page<UserDto> getAllUsers(Pageable pageable) {
       return userRepository.findAll(pageable).map(it->userAssembler.toDto(it));
    }

    public UserDto getUser(Long id) {
        return userAssembler.toDto(findEntity(id));
    }

    public User findEntity(Long id) { return userRepository.getOne(id); }

    public UserDto getUserByUsername(String username) {
        return userAssembler.toDto(userRepository.findByUsername(username));
    }

    @Transactional
    public void updateUserRequest(Long id, RequestStatus requestStatus) {
        User user = findEntity(id);
        user.setRequestStatus(requestStatus);
    }

    public boolean isNumeric(String strNum) {
        if (strNum == null) {
            return false;
        }
        return pattern.matcher(strNum).matches();
    }

}

