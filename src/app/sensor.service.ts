import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Sensor} from "./sensor";

@Injectable()
export class SensorService {

  constructor(private http: HttpClient) { }

  connectSensor(type: string, unit: string, regular_from: number, regular_to: number): Observable<Sensor> {
    return this.http.post<Sensor>('http://localhost:8090/api/sensor/', {
      type: type,
      unit: unit,
      regularFrom: regular_from,
      regularTo: regular_to
    }, {
      headers: new HttpHeaders().set('Authorization', 'Basic ' + localStorage.getItem('credentials'))
    });
  }
}
