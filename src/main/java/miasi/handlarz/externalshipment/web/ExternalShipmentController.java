package miasi.handlarz.externalshipment.web;

import miasi.handlarz.externalshipment.ExternalShipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/external-shipment")
public class ExternalShipmentController {

    @Autowired
    private ExternalShipmentService service;

    @PostMapping
    public Page<ExternalShipmentDto> get(@RequestBody ExternalShipmentCriteria criteria) {
        return service.get(criteria);
    }

    @PostMapping("/add")
    public ExternalShipmentDto add(@RequestBody ExternalShipmentDto dto) {
        return service.add(dto);
    }
}
