package miasi.handlarz.shared;


@SuppressWarnings("serial")
public class DomainException extends RuntimeException {

    private Long domainEntityId;
    private String brokenRule;

    public DomainException() {
    }

    public DomainException(String message) {
        super(message);
    }

    public DomainException(String message, Throwable cause) {
        super(message, cause);
    }

    public DomainException(Throwable cause) {
        super(cause);
    }

    public DomainException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }

    @Override
    public String toString() {
        String result = super.toString();
        if (domainEntityId != null) {
            result = "Id: " + domainEntityId + " " + result;
        }

        return result;
    }
}
