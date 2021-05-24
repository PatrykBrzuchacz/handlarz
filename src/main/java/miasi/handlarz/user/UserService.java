package miasi.handlarz.user;

import miasi.handlarz.security.model.RequestStatus;
import miasi.handlarz.security.service.SecurityUserHelper;
import miasi.handlarz.security.web.dto.UserCriteria;
import miasi.handlarz.security.web.dto.UserDto;
import miasi.handlarz.subscription.SubscriptionService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@Service
public class UserService {

    private static final Pattern pattern = Pattern.compile("-?\\d+(\\.\\d+)?");

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserAssembler userAssembler;
    @Autowired
    private SubscriptionService subscriptionService;
    @Autowired
    private SecurityUserHelper securityUserHelper;

    public Page<UserDto> getAllUsers(UserCriteria userCriteria) {
        UserSpec spec = new UserSpec(userCriteria);
        return userRepository.findAll(spec, userCriteria.toPageRequest()).map(it -> userAssembler.map(it));
    }

    public UserDto getUser(Long id) {
        return userAssembler.map(findEntity(id));
    }

    public User findEntity(Long id) {
        return userRepository.getOne(id);
    }

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

    @Transactional
    public UserDto updateDetails(UserDto dto) {
        User user = updateDetails(dto, findEntity(dto.getId()));
        return userAssembler.map(user);
    }

    private User updateDetails(UserDto dto, User user) {
        user.setCity(dto.getCity());
        user.setEmail(dto.getEmail());
        user.setFirstName(dto.getFirstName());
        user.setLastName(dto.getLastName());
        user.setHouseNumber(dto.getHouseNumber());
        user.setStreet(dto.getStreet());
        user.setStreetNumber(dto.getStreetNumber());
        user.setPhoneNumber(dto.getPhoneNumber());
        user.setCompanyName(dto.getCompanyName());
        if (dto.getSubscriptionDto() != null) {
            user.setSubscription(subscriptionService.findOne(dto.getSubscriptionDto().getId()));
        }

        return user;
    }

    public UserDto getLoggedUserDetails() {
        return userAssembler.map(securityUserHelper.getLoggedUser());
    }

    public List<UserDto> getAllUnpaged() {
        return findAll().stream().filter(it-> StringUtils.isNotBlank(it.getFirstName())).map(it -> userAssembler.map(it)).collect(Collectors.toList());
    }


    public List<User> findAll() {
        return userRepository.findAll();
    }
}

