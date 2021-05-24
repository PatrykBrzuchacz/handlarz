package miasi.handlarz.invoice.web;

import lombok.Getter;
import lombok.Setter;
import miasi.handlarz.invoice.InvoiceType;
import miasi.handlarz.order.web.OrderDto;
import miasi.handlarz.security.web.dto.UserDto;

import java.time.LocalDateTime;

@Setter
@Getter
public class InvoiceDto {
    private Long id;
    private OrderDto order;
    private UserDto user;
    private String invoiceNumber;
    private LocalDateTime createdDate;
    private InvoiceType type;
    private float price;
}
