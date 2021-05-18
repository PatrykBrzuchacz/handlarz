package miasi.handlarz.product;

import lombok.RequiredArgsConstructor;
import miasi.handlarz.product.web.dto.ProductCriteria;
import miasi.handlarz.product.web.dto.ProductDto;
import miasi.handlarz.user.UserService;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository repository;
    private final ProductAssembler assembler;
    private final UserService service;

    public Page<ProductDto> find(ProductCriteria criteria) {
        return repository.findAll(new ProductSpec(criteria),criteria.toPageRequest()).map(assembler::map);
    }

    public ProductDto add(ProductDto dto) {
        Product product = assembler.update(dto, new Product());
        product.setUser(service.findEntityByUsername(dto.getUsername()));
        repository.save(product);
        return assembler.map(product);
    }

    @Transactional
    public ProductDto update(ProductDto dto) {
        Product product = assembler.update(dto, repository.getOne(dto.getId()));
        product.setUser(service.findEntityByUsername(dto.getUsername()));
        return assembler.map(product);
    }

    public Product findEntity(Long productId) {
        return repository.getOne(productId);
    }

    public List<ProductDto> find() {
        return repository.findAll().stream().map(assembler::map).collect(Collectors.toList());
    }
}
