package miasi.handlarz.externalshipment;

import miasi.handlarz.externalshipment.web.ExternalShipmentDto;
import miasi.handlarz.product.ProductAssembler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ExternalShipmentAssembler {

    @Autowired
    private ProductAssembler assembler;

    public ExternalShipmentDto map(ExternalShipment externalShipment) {
        ExternalShipmentDto dto = new ExternalShipmentDto();
        dto.setId(externalShipment.getId());
        dto.setAdmissionDate(externalShipment.getAdmissionDate());
        dto.setDocumentNr(externalShipment.getDocumentNumber());
        dto.setIssueDate(externalShipment.getIssueDate());
        dto.setPrice(externalShipment.getPrice());
        dto.setAmount(externalShipment.getAmount());
        dto.setProduct(assembler.map(externalShipment.getProduct()));

        return dto;
    }
}
