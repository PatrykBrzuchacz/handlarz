package miasi.handlarz.externalshipment;

import lombok.RequiredArgsConstructor;
import miasi.handlarz.externalshipment.web.ExternalShipmentCriteria;
import miasi.handlarz.externalshipment.web.ExternalShipmentDto;
import miasi.handlarz.product.Product;
import miasi.handlarz.product.ProductService;
import miasi.handlarz.user.UserService;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.TemporalAdjusters;

@Service
@RequiredArgsConstructor
public class ExternalShipmentService {

    private final ExternalShipmentRepository repository;
    private final ExternalShipmentAssembler assembler;
    private final UserService userService;
    private final ProductService productService;

    public Page<ExternalShipmentDto> get(ExternalShipmentCriteria criteria) {
        return repository.findAll(new ExternalShipmentSpec(criteria), criteria.toPageRequest()).map(assembler::map);
    }

    public ExternalShipmentDto add(ExternalShipmentDto dto) {
        ExternalShipment externalShipment = update(dto, new ExternalShipment());
        repository.save(externalShipment);
        return assembler.map(externalShipment);
    }

    @Transactional
    public ExternalShipment update(ExternalShipmentDto dto, ExternalShipment entity) {
        entity.setPrice(dto.getPrice());
        entity.setAmount(dto.getAmount());
        entity.setUser(userService.findEntityByUsername(dto.getUsername()));
        entity.setDocumentNumber(getOrderNumber("PZ ", entity.getUser().getId(), dto.getIssueDate()));
        Product product = productService.findEntity(dto.getProduct().getId());
        product.setAmount(product.getAmount() + dto.getAmount());

        entity.setProduct(productService.findEntity(dto.getProduct().getId()));
        entity.setAdmissionDate(dto.getAdmissionDate());
        entity.setIssueDate(dto.getIssueDate());

        return entity;
    }

    private String getOrderNumber(String prefix, Long userId, LocalDateTime date) {
        return prefix  +  (repository.countByUser_IdAndIssueDateBetween(userId,
                date.with(TemporalAdjusters.firstDayOfMonth()),
                date.with(TemporalAdjusters.lastDayOfMonth())) + 1 )
                + "/" +
                LocalDate.now().getMonthValue() + "-" + LocalDate.now().getYear();
    }

}
