package miasi.handlarz.subscription;

import miasi.handlarz.shared.DomainException;
import miasi.handlarz.subscription.web.SubscriptionDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class SubscriptionService {

    @Autowired
    private SubscriptionRepository repository;
    @Autowired
    private SubscriptionAssembler assembler;

    public List<SubscriptionDto> findAll() {
        return assembler.toDto(repository.findAll());
    }

    public SubscriptionDto add(SubscriptionDto dto) {
        Subscription subscription = update(dto, new Subscription());
        return assembler.toDto(repository.save(subscription));
    }

    @Transactional
    public SubscriptionDto update(SubscriptionDto dto) {
        Optional<Subscription> subscription = repository.findById(dto.getId());
        if(!subscription.isPresent()) {
            throw new DomainException("Subscription does not exists");
        }
        update(dto,subscription.get());
        return assembler.toDto(subscription.get());
    }

    public Subscription update(SubscriptionDto dto, Subscription subscription) {
        subscription.setName(dto.getName());
        subscription.setFromOrders(dto.getFromOrders());
        subscription.setToOrders(dto.getToOrders());
        subscription.setPrice(dto.getPrice());
        return subscription;
    }

    public Subscription findOne(Long id) {
        return repository.getOne(id);
    }
}
