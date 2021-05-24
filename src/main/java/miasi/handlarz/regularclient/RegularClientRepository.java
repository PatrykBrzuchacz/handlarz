package miasi.handlarz.regularclient;

import miasi.handlarz.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.Arrays;
import java.util.List;

@Repository
public interface RegularClientRepository extends JpaRepository<RegularClient, Long>, JpaSpecificationExecutor<RegularClient> {
    List<RegularClient> findAllByUser(User loggedUser);

}
