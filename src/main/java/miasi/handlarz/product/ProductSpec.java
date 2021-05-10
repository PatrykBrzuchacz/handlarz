package miasi.handlarz.product;

import lombok.RequiredArgsConstructor;
import miasi.handlarz.product.web.dto.ProductCriteria;
import miasi.handlarz.user.User_;
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

        return cb.and(predicates.toArray(new Predicate[predicates.size()]));
    }
}
