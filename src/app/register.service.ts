import { Injectable } from '@angular/core';
import {User} from "./user";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class RegisterService {
  url = 'http://localhost:8090';
  constructor(private http: HttpClient) { }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.url + '/api/user/create', user);
  }
}
