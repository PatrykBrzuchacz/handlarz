package miasi.handlarz.security.web.securityException;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.CONFLICT)
public class WorkerIsNotActiveException extends RuntimeException {
    public WorkerIsNotActiveException() {
        super("Worker is not activated");
    }
}