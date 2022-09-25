import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

const baseUrl = 'http://184.169.208.234:8080/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor(private _http: HttpClient) { }

  public signUpData(data: any): Observable<any>{
    return this._http.post(baseUrl+'signup', data, httpOptions)
  }

  public loginData(data: any): Observable<any>{
    return this._http.post(baseUrl+'login', data, httpOptions)
  }
}
