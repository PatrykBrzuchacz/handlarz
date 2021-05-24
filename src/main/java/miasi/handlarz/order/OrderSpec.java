package miasi.handlarz.order;

import lombok.RequiredArgsConstructor;
import miasi.handlarz.order.web.OrderCriteria;
import miasi.handlarz.regularclient.RegularClient_;
import miasi.handlarz.shared.PredicateUtil;
import org.apache.commons.lang3.StringUtils;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
public class OrderSpec implements Specification<Order> {

    private final OrderCriteria criteria;

    @Override
    public Predicate toPredicate(Root<Order> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
        List<Predicate> andPredicates = new ArrayList();

        if(criteria.getOrderStatus() == null) {
            andPredicates.add(cb.notEqual(root.get(Order_.orderStatus), OrderStatus.CANCELLED));
        } else {
            andPredicates.add(cb.equal(root.get(Order_.orderStatus), criteria.getOrderStatus()));
        }

        if(StringUtils.isNotBlank(criteria.getDocumentNumber())) {
            andPredicates.add(PredicateUtil.createLikePredicate(cb, root.get(Order_.orderNumber), criteria.getDocumentNumber()));
        }

        if(criteria.getClient()!=null) {
            andPredicates.add(cb.equal(root.join(Order_.regularClient).get(RegularClient_.id), criteria.getClient().getId()));
        }


        return cb.and(andPredicates.toArray(new Predicate[andPredicates.size()]));
    }
}
