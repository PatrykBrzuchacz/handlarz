import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ExternalShipmentCriteria, ExternalShipmentDto} from '../../core/api-models';

const API_URL = environment.apiUrl;

@Injectable({  providedIn: 'root'
})
export class ExternalShipmentService {

  constructor(private http: HttpClient) {
  }

  getAll(criteria: ExternalShipmentCriteria) {
    return this.http.post<ExternalShipmentDto[]>(`${API_URL}/external-shipment`, criteria);
  }

  add(externalShipmentDto: ExternalShipmentDto) {
    return this.http.post<ExternalShipmentDto>(`${API_URL}/external-shipment/add`, externalShipmentDto);
  }

  update(externalShipmentDto: ExternalShipmentDto) {
    return this.http.put<ExternalShipmentDto>(`${API_URL}/external-shipment/update`, externalShipmentDto);
  }
}
