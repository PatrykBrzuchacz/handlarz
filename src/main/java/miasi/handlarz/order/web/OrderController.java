package miasi.handlarz.order.web;

import miasi.handlarz.order.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/order")
public class OrderController {

    @Autowired
    private OrderService service;

    @PostMapping
    public Page<OrderDto> get(@RequestBody OrderCriteria criteria) { return service.find(criteria); }

    @PostMapping("/add")
    public OrderDto add(@RequestBody OrderDto dto) {
        return service.add(dto);
    }

    @PutMapping()
    public OrderDto update(@RequestBody OrderDto dto) {
        return service.update(dto);
    }
}
