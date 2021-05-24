package miasi.handlarz.externalshipment;

import lombok.RequiredArgsConstructor;
import miasi.handlarz.externalshipment.web.ExternalShipmentCriteria;
import miasi.handlarz.order.Order_;
import miasi.handlarz.product.Product_;
import miasi.handlarz.regularclient.RegularClient_;
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
public class ExternalShipmentSpec implements Specification<ExternalShipment> {

    private final ExternalShipmentCriteria criteria;

    @Override
    public Predicate toPredicate(Root<ExternalShipment> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
        List<Predicate> predicates = new ArrayList<>();

        predicates.add(cb.equal(root.join(ExternalShipment_.user).get(User_.USERNAME), criteria.getUsername()));

        if(StringUtils.isNotBlank(criteria.getDocumentNumber())) {
            predicates.add(PredicateUtil.createLikePredicate(cb, root.get(ExternalShipment_.documentNumber), criteria.getDocumentNumber()));
        }

        if(criteria.getProduct()!=null) {
            predicates.add(cb.equal(root.join(ExternalShipment_.product).get(Product_.id), criteria.getProduct().getId()));
        }


        return cb.and(predicates.toArray(new Predicate[predicates.size()]));

    }
}
