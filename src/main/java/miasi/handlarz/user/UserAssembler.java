package miasi.handlarz.user;

import miasi.handlarz.security.web.dto.UserDto;
import miasi.handlarz.subscription.SubscriptionAssembler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class UserAssembler {

    @Autowired
    private SubscriptionAssembler subscriptionAssembler;

    public List<UserDto> map(List<User> users) {
        return users.stream().map(this::map).collect(Collectors.toList());
    }

    public UserDto map(User user) {
        UserDto dto = new UserDto();
        dto.setId(user.getId());
        dto.setFirstName(user.getFirstName());
        dto.setLastName(user.getLastName());
        dto.setCity(user.getCity());
        dto.setStreet(user.getStreet());
        dto.setEmail(user.getEmail());
        dto.setNip(user.getNip());
        dto.setHouseNumber(user.getHouseNumber());
        dto.setStreetNumber(user.getStreetNumber());
        dto.setPhoneNumber(user.getPhoneNumber());
        dto.setActive(user.isActive());
        dto.setRequestStatus(user.getRequestStatus());
        dto.setUsername(user.getUsername());
        dto.setCompanyName(user.getCompanyName());
        if (user.getSubscription() != null) {
            dto.setSubscriptionDto(subscriptionAssembler.toDto(user.getSubscription()));
        }

        return dto;
    }


}
