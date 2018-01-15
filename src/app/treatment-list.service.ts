import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Treatment} from "./treatment";
import {Observable} from "rxjs/Observable";
import {TreatmentDetails} from "./treatment-details";

@Injectable()
export class TreatmentListService {

  url = 'http://localhost:8090/api/treatment/';
  constructor(private http: HttpClient) { }


  getTreatments(): Observable<Treatment[]> {
    window.console.log(localStorage.getItem('credentials'));
    return this.http.get<Treatment[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', 'Basic ' + localStorage.getItem('credentials'))
    });
  }

  acceptTreatment(id: number): Observable<TreatmentDetails> {
    return this.http.patch<TreatmentDetails>('http://localhost:8090/api/treatment/' + id, {}, {
      headers: new HttpHeaders().set('Authorization', 'Basic ' + localStorage.getItem('credentials'))
    });
  }

  getAcceptedTreatmentsWithoutDiagnose(): Observable<Treatment[]> {
    return this.http.get<Treatment[]>('http://localhost:8090/api/treatment/accepted', {
      headers: new HttpHeaders().set('Authorization', 'Basic ' + localStorage.getItem('credentials'))
    });
  }

  getTreatmentdetails(id: number): Observable<TreatmentDetails> {
    return this.http.get<TreatmentDetails>('http://localhost:8090/api/treatment/' + id, {
      headers: new HttpHeaders().set('Authorization', 'Basic ' + localStorage.getItem('credentials'))
    });
  }

  setDiagnosis(givenDiagnosis: string, id: number): Observable<TreatmentDetails> {
    return this.http.patch<TreatmentDetails>('http://localhost:8090/api/treatment/' + id ,
      {diagnosis: givenDiagnosis},
      {headers: new HttpHeaders().set('Authorization', 'Basic ' + localStorage.getItem('credentials'))}
    );
  }

  createTreatment(patientRequest: string): Observable<Treatment> {
    return this.http.post<Treatment>('http://localhost:8090/api/treatment/',
      {patientRequest: patientRequest},
      {headers: new HttpHeaders().set('Authorization', 'Basic ' + localStorage.getItem('credentials'))});
  }
}
