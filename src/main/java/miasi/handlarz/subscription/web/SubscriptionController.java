package miasi.handlarz.subscription.web;

import miasi.handlarz.subscription.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/subscription")
public class SubscriptionController {

    @Autowired
    private SubscriptionService service;

    @GetMapping
    public List<SubscriptionDto> getAll() {
        return service.findAll();
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping
    public SubscriptionDto add(@RequestBody SubscriptionDto subscriptionDto) {
        return service.add(subscriptionDto);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PutMapping
    public SubscriptionDto update(@RequestBody SubscriptionDto subscriptionDto) {
        return service.update(subscriptionDto);
    }
}
