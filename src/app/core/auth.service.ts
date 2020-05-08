import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const API_URL = 'http://localhost:300';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(userName: string, password: string) {

    this.http.post(API_URL + '/user/login', {userName, password} )

  }
}
