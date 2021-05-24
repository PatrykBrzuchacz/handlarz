package miasi.handlarz.product;

import lombok.RequiredArgsConstructor;
import miasi.handlarz.product.web.dto.ProductCriteria;
import miasi.handlarz.shared.PredicateUtil;
import miasi.handlarz.user.User_;
import org.apache.commons.lang3.StringUtils;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
public class ProductSpec implements Specification<Product> {

    private final ProductCriteria criteria;

    @Override
    public Predicate toPredicate(Root<Product> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
        List<Predicate> predicates = new ArrayList<>();

        predicates.add(cb.equal(root.join(Product_.user).get(User_.USERNAME), criteria.getUsername()));
        if (StringUtils.isNotBlank(criteria.getName())) {
            predicates.add(PredicateUtil.createLikePredicate(cb, root.get(Product_.NAME), criteria.getName()));
        }
        return cb.and(predicates.toArray(new Predicate[predicates.size()]));
    }
}
