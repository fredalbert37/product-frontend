import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  signUp( user: any ): Observable<any>{
    return this.http.post<any>(this.URL + '/auth/signup', user);
  }

  login( user: any): Observable<any>{
   return this.http.post<any>(this.URL + '/auth/signin', user);
  }
}
