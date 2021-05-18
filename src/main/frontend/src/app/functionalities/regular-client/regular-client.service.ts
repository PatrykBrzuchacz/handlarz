import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {RegularClientCriteria, RegularClientDto} from '../../core/api-models';

const API_URL = environment.apiUrl;

@Injectable({  providedIn: 'root'
})
export class RegularClientService {

  constructor(private http: HttpClient) {
  }

  getAll(criteria: RegularClientCriteria) {
    return this.http.post<RegularClientDto[]>(`${API_URL}/regular-client`, criteria);
  }

  add(regularClientDto: RegularClientDto) {
    return this.http.post<RegularClientDto>(`${API_URL}/regular-client/add`, regularClientDto);
  }

  update(regularClientDto: RegularClientDto) {
    return this.http.put<RegularClientDto>(`${API_URL}/regular-client/update`, regularClientDto);
  }
}
