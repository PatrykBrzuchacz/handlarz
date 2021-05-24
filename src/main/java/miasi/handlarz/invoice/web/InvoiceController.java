package miasi.handlarz.invoice.web;

import miasi.handlarz.invoice.InvoiceService;
import miasi.handlarz.product.web.dto.ProductCriteria;
import miasi.handlarz.product.web.dto.ProductDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/invoice")
public class InvoiceController {

    @Autowired
    private InvoiceService service;

    @PostMapping
    public Page<InvoiceDto> get(@RequestBody InvoiceCriteria criteria) { return service.find(criteria); }

}
