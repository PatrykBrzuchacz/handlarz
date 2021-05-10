import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubscriptionDto } from '../../../../core/api-models';
import { environment } from '../../../../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable({  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<SubscriptionDto[]>(`${API_URL}/subscription`);
  }

  add(subscriptionDto: SubscriptionDto) {
    return this.http.post<SubscriptionDto>(`${API_URL}/subscription`, subscriptionDto);
  }

  update(subscriptionDto: SubscriptionDto) {
    return this.http.put<SubscriptionDto>(`${API_URL}/subscription`, subscriptionDto);
  }
}
