package miasi.handlarz.product.web;

import miasi.handlarz.product.ProductService;
import miasi.handlarz.product.web.dto.ProductCriteria;
import miasi.handlarz.product.web.dto.ProductDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService service;

    @PostMapping
    public Page<ProductDto> get(@RequestBody ProductCriteria criteria) {
        return service.find(criteria);
    }

    @PostMapping("/add")
    public ProductDto add(@RequestBody ProductDto dto) {
        return service.add(dto);
    }

    @PutMapping()
    public ProductDto update(@RequestBody ProductDto dto) {
        return service.update(dto);
    }

    @GetMapping
    public List<ProductDto> getAll() {
        return service.find();
    }
}
