package miasi.handlarz.shared;

import lombok.experimental.UtilityClass;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Expression;
import javax.persistence.criteria.Predicate;
import java.util.List;

@UtilityClass
public class PredicateUtil {

    public static Predicate createEqPredicate(CriteriaBuilder criteriaBuilder, Expression column, String searchText) {
        String searchBy = searchText.trim().toLowerCase();
        return criteriaBuilder.equal(criteriaBuilder.lower(column), searchBy);
    }

    public static Predicate createLikePredicate(CriteriaBuilder criteriaBuilder, Expression column, String searchText) {
        return criteriaBuilder.like(
                criteriaBuilder.lower(column),
                "%" + withSpecialCharacters(searchText) + "%",
                '/');
    }

    public static Predicate createNotLikePredicate(CriteriaBuilder criteriaBuilder, Expression column, String searchText) {
        return criteriaBuilder.notLike(
                criteriaBuilder.lower(column),
                "%" + withSpecialCharacters(searchText) + "%",
                '/');
    }

    private static String withSpecialCharacters(String searchText) {
        String searchBy = searchText.trim().toLowerCase();
        searchBy = searchBy.replace("/", "//");
        searchBy = searchBy.replace("%", "/%");
        searchBy = searchBy.replace("_", "/_");
        return searchBy;
    }

    public static Predicate togetherAnd(List<Predicate> predicates, CriteriaBuilder cb) {
        if (predicates == null || predicates.isEmpty()) {
            return null;
        }
        return cb.and(predicates.toArray(new Predicate[predicates.size()]));
    }
}
