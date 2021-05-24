package miasi.handlarz.order.web;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.GONE)
public class NotEnoughSubLimit extends RuntimeException {
    public NotEnoughSubLimit() {
        super("Not enough sub limit.");
    }
}