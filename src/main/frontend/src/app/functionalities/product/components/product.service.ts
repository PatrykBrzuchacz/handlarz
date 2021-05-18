import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductCriteria, ProductDto } from '../../../core/api-models';
import { environment } from '../../../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable({  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getAll(criteria: ProductCriteria) {
    return this.http.post<ProductDto[]>(`${API_URL}/products`, criteria);
  }

  getAllUnpaged() {
    return this.http.get<ProductDto[]>(`${API_URL}/products`);
  }


  add(productDto: ProductDto) {
    return this.http.post<ProductDto>(`${API_URL}/products/add`, productDto);
  }

  update(productDto: ProductDto) {
    return this.http.put<ProductDto>(`${API_URL}/products`, productDto);
  }
}
