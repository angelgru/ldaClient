import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {User} from "./user";


@Injectable()
export class LoginService {
  url = 'http://localhost:8090/api/user/userInfo';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<User> {
    const encryptedCredentials = btoa(email + ':' + password);
    localStorage.setItem('credentials', encryptedCredentials);
    return this.http.get<User>(this.url, {
      headers: new HttpHeaders().set('Authorization', 'Basic ' + encryptedCredentials)
    });
  }

  logout(): any {
    localStorage.removeItem('username');
    localStorage.removeItem('isDoctor');
  }

  getUser(): any {
    return localStorage.getItem('username');
  }

  getIsDoctor(): any {
    return localStorage.getItem('isDoctor');
  }

  isLoggedIn(): boolean {
    return this.getUser() != null;
  }
}
