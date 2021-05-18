package miasi.handlarz.externalshipment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface ExternalShipmentRepository extends JpaRepository<ExternalShipment, Long>, JpaSpecificationExecutor<ExternalShipment> {
}
