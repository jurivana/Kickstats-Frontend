import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  backendUrl = 'http://localhost:8000/api/'

  constructor(private http: HttpClient) { }

  update() {
    return this.http.get(this.backendUrl + 'update');
  }

  getUsers() {
    return this.http.get(this.backendUrl + 'users');
  }

  getTable(user: string) {
    let url = this.backendUrl + 'table';
    if (user) {
      url += `/${user}`;
    }
    return this.http.get(url);
  }

  getPoints(user: string) {
    if (!user) {
      return;
    }
    return this.http.get(this.backendUrl + 'points/' + user);
  }
}
