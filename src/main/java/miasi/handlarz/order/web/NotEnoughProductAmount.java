package miasi.handlarz.order.web;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.I_AM_A_TEAPOT)
public class NotEnoughProductAmount extends RuntimeException {
    public NotEnoughProductAmount() {
        super("Not enough amount products.");
    }
}