package miasi.handlarz.security.web.dto;

import lombok.Getter;
import miasi.handlarz.security.model.RequestStatus;
import miasi.handlarz.shared.dto.SearchRequestDto;
import miasi.handlarz.subscription.web.SubscriptionDto;

@Getter
public class UserCriteria extends SearchRequestDto {
    private RequestStatus requestStatus;
    private String username;
    private String firstName;
    private String lastName;
    private SubscriptionDto subscription;
    private String nip;


}
