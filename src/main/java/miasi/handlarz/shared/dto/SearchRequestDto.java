package miasi.handlarz.shared.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.util.CollectionUtils;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Getter
@Setter
public class SearchRequestDto implements Serializable {
    private int pageSize = 10;
    private int pageNumber = 0;
    private List<SortDto> sorting = new ArrayList();

    public SearchRequestDto() {
    }

    public SearchRequestDto(int pageSize, int pageNumber, List<SortDto> sorting) {
        this.pageSize = pageSize;
        this.pageNumber = pageNumber;
        this.sorting = sorting;
    }

    public PageRequest toPageRequest() {
        if (this.pageSize == 0) {
            this.pageSize = 2147483647;
        }

        return PageRequest.of(this.pageNumber, this.pageSize, this.getSortingOrder());
    }

    public PageRequest toShortPageRequest() {
        return PageRequest.of(this.pageNumber, this.pageSize);
    }

    @JsonIgnore
    public Sort getSortingOrder() {
        List<Sort.Order> orders = this.getOrders();
        return !CollectionUtils.isEmpty(orders) ? Sort.by(orders) : Sort.unsorted();
    }

    @JsonIgnore
    public List<Sort.Order> getOrders() {
        List<Sort.Order> orders = new ArrayList();
        if (this.sorting != null && !this.sorting.isEmpty()) {
            Iterator var2 = this.sorting.iterator();

            while(var2.hasNext()) {
                SortDto sort = (SortDto)var2.next();
                orders.add(new Sort.Order(sort.getDirection(), sort.getProperty()));
            }
        }

        return orders;
    }
}

class SortDto implements Serializable {
    private String property;
    private Sort.Direction direction;

    public SortDto() {
    }

    public String getProperty() {
        return this.property;
    }

    public void setProperty(String property) {
        this.property = property;
    }

    public Sort.Direction getDirection() {
        return this.direction;
    }

    public void setDirection(Sort.Direction direction) {
        this.direction = direction;
    }
}
