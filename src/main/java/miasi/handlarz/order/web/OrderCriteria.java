package miasi.handlarz.order.web;

import lombok.Getter;
import miasi.handlarz.order.OrderStatus;
import miasi.handlarz.regularclient.web.RegularClientDto;
import miasi.handlarz.shared.dto.SearchRequestDto;

@Getter
public class OrderCriteria extends SearchRequestDto {
    private OrderStatus orderStatus;
    private String documentNumber;
    private RegularClientDto client;
    private String username;
}
