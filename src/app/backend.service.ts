import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  backendUrl = 'http://kickstatsapi.herokuapp.com/api/'

  constructor(private http: HttpClient) { }

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
