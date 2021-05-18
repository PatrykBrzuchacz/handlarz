package miasi.handlarz.user;

import lombok.RequiredArgsConstructor;
import miasi.handlarz.security.model.RequestStatus;
import miasi.handlarz.security.model.RoleName;
import miasi.handlarz.security.model.Role_;
import miasi.handlarz.security.web.dto.UserCriteria;
import miasi.handlarz.shared.PredicateUtil;
import miasi.handlarz.subscription.Subscription_;
import org.apache.commons.lang3.StringUtils;
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

        if (userCriteria.getRequestStatus() == null) {
            predicates.add(cb.notEqual(root.get(User_.requestStatus), RequestStatus.DECLINED));
        } else {
            predicates.add(cb.equal(root.get(User_.requestStatus), userCriteria.getRequestStatus()));
        }

        if (userCriteria.getSubscription() != null) {
            predicates.add(cb.equal(root.get(User_.subscription).get(Subscription_.id), userCriteria.getSubscription().getId()));
        }

        if(StringUtils.isNotBlank(userCriteria.getUsername())) {
            predicates.add(PredicateUtil.createLikePredicate(cb, root.get(User_.username), userCriteria.getUsername()));
        }
        if(StringUtils.isNotBlank(userCriteria.getNip())) {
            predicates.add(PredicateUtil.createLikePredicate(cb, root.get(User_.nip), userCriteria.getNip()));
        }
        if(StringUtils.isNotBlank(userCriteria.getFirstName())) {
            predicates.add(PredicateUtil.createLikePredicate(cb, root.get(User_.firstName), userCriteria.getFirstName()));
        }
        if(StringUtils.isNotBlank(userCriteria.getLastName())) {
            predicates.add(PredicateUtil.createLikePredicate(cb, root.get(User_.lastName), userCriteria.getLastName()));
        }

        predicates.add(cb.equal(root.join(User_.role).get(Role_.NAME), RoleName.ROLE_USER));
        return cb.and(predicates.toArray(new Predicate[predicates.size()]));
    }
}
