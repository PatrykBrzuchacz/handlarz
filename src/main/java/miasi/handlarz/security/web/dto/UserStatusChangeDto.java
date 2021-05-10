package miasi.handlarz.security.web.dto;

import lombok.Getter;
import miasi.handlarz.security.model.RequestStatus;

@Getter
public class UserStatusChangeDto {
    private Long id;
    private boolean active;
    private RequestStatus status;
}
