import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {OrderChangeStatusDto, OrderCriteria, OrderDto, ProductDto} from '../../core/api-models';


const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  getAll(criteria: OrderCriteria) {
    return this.http.post<OrderDto[]>(`${API_URL}/orders`, criteria);
  }

  add(orderDto: OrderDto) {
    return this.http.post<ProductDto>(`${API_URL}/orders/add`, orderDto);
  }

  changeStatus(orderChangeStatusDto: OrderChangeStatusDto) {
    return this.http.put<OrderChangeStatusDto>(`${API_URL}/orders/change-status`, orderChangeStatusDto);
  }
}
