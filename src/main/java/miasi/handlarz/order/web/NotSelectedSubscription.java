package miasi.handlarz.order.web;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.CONFLICT)
public class NotSelectedSubscription extends RuntimeException {
    public NotSelectedSubscription() {
        super("Not selected subscription.");
    }
}