import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseURL = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get(this.baseURL);
  }

  getUserById(userId: any) {
    return this.http.get(`${this.baseURL}/${userId}`);
  }
}
