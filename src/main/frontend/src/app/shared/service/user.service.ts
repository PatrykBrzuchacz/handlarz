import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { RequestStatus, SearchRequestDto, UserDto } from '../../core/api-models';


const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: UserDto;

  constructor(private http: HttpClient) {
  }

  getUsersForAdmin(searchRequestDto: SearchRequestDto) {
    return this.http.post<UserDto[]>(`${API_URL}/users`, searchRequestDto);
  }

  changeActive(userId: number, newActiveStatus: boolean) {
    return this.http.put(`${API_URL}/users/change-active`, { id: userId, active: newActiveStatus});
  }

  changeRequest(userId: number, requestStatus: RequestStatus) {
    return this.http.put(`${API_URL}/users/change-request`, { id: userId, status: requestStatus});
  }

  getLoggedUserDetails() {
    return this.http.get(`${API_URL}/users/details`);
  }
  unbanUser(id: number) {
    return this.http.put<UserDto>(`${API_URL}/users/${id}/unban`, this.user);
  }

  updateDetails(userDto: UserDto) {
    return this.http.put(`${API_URL}/users/details`, userDto);
  }
}
