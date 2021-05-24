package miasi.handlarz.invoice;

import lombok.RequiredArgsConstructor;
import miasi.handlarz.invoice.web.InvoiceCriteria;
import miasi.handlarz.order.Order_;
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
public class InvoiceSpec implements Specification<Invoice> {
    private final InvoiceCriteria criteria;

    @Override
    public Predicate toPredicate(Root<Invoice> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
        List<Predicate> andPredicates = new ArrayList();

        if (criteria.getType() != null) {
            if (criteria.getType().equals(InvoiceType.ORDER)) {
                andPredicates.add(cb.isNotNull(root.get(Invoice_.order)));
            } else {
                andPredicates.add(cb.isNull(root.get(Invoice_.order)));
            }
        }
        if (StringUtils.isNotBlank(criteria.getDocumentNumber())) {
            andPredicates.add(PredicateUtil.createLikePredicate(cb, root.get(Invoice_.invoiceNumber), criteria.getDocumentNumber()));
        }

        if (StringUtils.isNotBlank(criteria.getUsername())) {
            andPredicates.add(cb.equal(root.join(Invoice_.user).get(User_.USERNAME), criteria.getUsername()));
        }

        if (criteria.getClient() != null) {
            andPredicates.add(cb.equal(root.join(Invoice_.order).join(Order_.regularClient).get(RegularClient_.id), criteria.getClient().getId()));
        }

        return cb.and(andPredicates.toArray(new Predicate[andPredicates.size()]));

    }
}
