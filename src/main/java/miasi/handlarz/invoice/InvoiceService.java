package miasi.handlarz.invoice;

import miasi.handlarz.invoice.web.InvoiceCriteria;
import miasi.handlarz.invoice.web.InvoiceDto;
import miasi.handlarz.product.web.dto.ProductDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Service
public class InvoiceService {

    @Autowired
    private InvoiceRepository repository;
    @Autowired
    private InvoiceAssembler assembler;

    public Page<InvoiceDto> find(InvoiceCriteria criteria) {
        return null;
    }

    public InvoiceDto add(InvoiceDto dto) {
        return null;
    }

    public InvoiceDto update(InvoiceDto dto) {
        return null;
    }
}
