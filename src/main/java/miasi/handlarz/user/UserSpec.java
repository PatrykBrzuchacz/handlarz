package miasi.handlarz.user;

import lombok.RequiredArgsConstructor;
import miasi.handlarz.security.model.RequestStatus;
import miasi.handlarz.security.model.RoleName;
import miasi.handlarz.security.model.Role_;
import miasi.handlarz.security.web.dto.UserCriteria;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
public class UserSpec implements Specification<User> {

    private final UserCriteria userCriteria;

    @Override
    public Predicate toPredicate(Root root, CriteriaQuery query, CriteriaBuilder cb) {
        List<Predicate> predicates = new ArrayList<>();

        predicates.add(cb.notEqual(root.get(User_.requestStatus), RequestStatus.DECLINED));
        predicates.add(cb.equal(root.join(User_.role).get(Role_.NAME), RoleName.ROLE_USER));

        return cb.and(predicates.toArray(new Predicate[predicates.size()]));
    }
}
