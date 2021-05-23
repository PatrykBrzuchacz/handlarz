package miasi.handlarz.order;

import miasi.handlarz.order.web.OrderCriteria;
import miasi.handlarz.order.web.OrderDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    @Autowired
    private OrderRepository repository;
    @Autowired
    private OrderAssembler assembler;

    public Page<OrderDto> find(OrderCriteria criteria) {
        return null;
    }

    public OrderDto add(OrderDto dto) {
        return null;
    }

    public OrderDto update(OrderDto dto) {
        return null;
    }
}
