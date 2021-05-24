import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {InvoiceCriteria, OrderChangeStatusDto, OrderCriteria, OrderDto, ProductDto} from '../../core/api-models';


const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient) {
  }

  getAll(criteria: InvoiceCriteria) {
    return this.http.post<OrderDto[]>(`${API_URL}/invoice`, criteria);
  }
}
