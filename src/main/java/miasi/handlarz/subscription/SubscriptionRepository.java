package miasi.handlarz.subscription;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
interface SubscriptionRepository extends JpaRepository<Subscription, Long> {
}
