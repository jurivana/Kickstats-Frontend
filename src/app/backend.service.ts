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
    return this.http.get(this.backendUrl + 'table/' + user);
  }

  getPoints(user: string) {
    return this.http.get(this.backendUrl + 'points/' + user);
  }
}
