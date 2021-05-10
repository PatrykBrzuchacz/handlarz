package miasi.handlarz.subscription;

import miasi.handlarz.subscription.web.SubscriptionDto;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class SubscriptionAssembler {

    public List<SubscriptionDto> toDto(List<Subscription> subscriptions) {
        return subscriptions.stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    public SubscriptionDto toDto(Subscription subscription) {
        SubscriptionDto dto = new SubscriptionDto();
        dto.setId(subscription.getId());
        dto.setName(subscription.getName());
        dto.setPrice(subscription.getPrice());
        dto.setFromOrders(subscription.getFromOrders());
        dto.setToOrders(subscription.getToOrders());

        return dto;
    }
}
