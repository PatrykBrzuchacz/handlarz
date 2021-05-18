package miasi.handlarz.regularclient;

import lombok.RequiredArgsConstructor;
import miasi.handlarz.regularclient.web.RegularClientCriteria;
import miasi.handlarz.user.User_;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
public class RegularClientSpec implements Specification<RegularClient> {

    private final RegularClientCriteria criteria;


    @Override
    public Predicate toPredicate(Root<RegularClient> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
        List<Predicate> predicates = new ArrayList<>();

        predicates.add(cb.equal(root.join(RegularClient_.user).get(User_.USERNAME), criteria.getUsername()));

        return cb.and(predicates.toArray(new Predicate[predicates.size()]));

    }
}
