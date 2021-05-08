import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User} from '../model';

import {HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';


const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: User;

  constructor(private http: HttpClient) { }

  getUsersForAdmin(): Observable<User[]> {
    return this.http.get<User[]>(`${API_URL}/users`);
  }

  deleteUser(userId: number) {
    return this.http.delete(`${API_URL}/users/${userId}`);
  }

  banUser(id: number) {
    return this.http.put(`${API_URL}/users/${id}/ban`, this.user);
  }

  unbanUser(id: number) {
    return this.http.put<User>(`${API_URL}/users/${id}/unban`, this.user);
  }
}
