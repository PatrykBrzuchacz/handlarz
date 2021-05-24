package miasi.handlarz.invoice.web;

import lombok.Getter;
import miasi.handlarz.invoice.InvoiceType;
import miasi.handlarz.regularclient.web.RegularClientDto;
import miasi.handlarz.shared.dto.SearchRequestDto;

@Getter
public class InvoiceCriteria extends SearchRequestDto {
    private InvoiceType type;
    private String documentNumber;
    private String username;
    private RegularClientDto client;
}
