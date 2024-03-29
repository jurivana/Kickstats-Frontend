import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private backendUrl = environment.backendUrl;

  constructor(private http: HttpClient) {}

  update() {
    return this.http.get(this.backendUrl + 'update');
  }

  getMeta() {
    return this.http.get(this.backendUrl + 'meta');
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

  getHighlights(user: string | null = null) {
    let url = this.backendUrl + 'highlights';
    if (user) {
      url += '/' + user;
    }
    return this.http.get(url);
  }
}
