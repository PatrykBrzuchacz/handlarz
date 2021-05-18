package miasi.handlarz.regularclient.web;

import miasi.handlarz.regularclient.RegularClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/regular-client")
public class RegularClientController {

    @Autowired
    private RegularClientService service;

    @PostMapping
    public Page<RegularClientDto> getAll(@RequestBody RegularClientCriteria criteria) {
        return service.find(criteria);
    }

    @PostMapping("/add")
    public RegularClientDto add(@RequestBody RegularClientDto dto) {
        return service.add(dto);
    }

    @PutMapping("/update")
    public RegularClientDto update(@RequestBody RegularClientDto dto) {
        return service.update(dto);
    }
}
