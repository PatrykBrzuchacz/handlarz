package miasi.handlarz.externalshipment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;

@Repository
public interface ExternalShipmentRepository extends JpaRepository<ExternalShipment, Long>, JpaSpecificationExecutor<ExternalShipment> {

    int countByUser_IdAndIssueDateBetween(Long userId, LocalDateTime with, LocalDateTime with1);
}
