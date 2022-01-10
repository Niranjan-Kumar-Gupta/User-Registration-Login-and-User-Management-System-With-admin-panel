import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
 
  constructor(private router: Router, private http: HttpClient) {}

  setToken(token: string): void {
   
    localStorage.setItem('token', token);
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }


  isLoggedIn() {
    const token = localStorage.getItem('token')
     
    return this.getToken() !== null ;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {
    let url = 'http://localhost:5000/api/login';

    const headers = { 'content-type': 'application/json' };
    const user = {
      email,
      password,
    };
    const body = JSON.stringify(user);
    try {
      return this.http.post<any>(url, body, { headers });
    } catch (error) {
      return throwError(new Error('something went wrong'));
    }
  }

  signup({ email, phone, password }: any): Observable<any> {
    let url = 'http://localhost:5000/api/signup';
    const headers = { 'content-type': 'application/json' };
    const user = {
      email,
      phone,
      password,
    };
    const body = JSON.stringify(user);
    try {
      return this.http.post<any>(url, body, { headers });
    } catch (error) {
      return throwError(new Error('something went wrong'));
    }
  }

  getCandidateList(): Observable<any> {
    let url = 'http://localhost:5000/api/getCandidate';
    return this.http.get<any>(url);
  }
  getCandidateById(_id:any): Observable<any> {
    let url = `http://localhost:5000/api/getCandidateById/${_id}`;
    return this.http.get<any>(url);
  }
  deleteCandidate(_id: any): Observable<any> {
    let url = `http://localhost:5000/api/deleteCandidate/${_id}`;

    try {
      return this.http.delete<any>(url);
    } catch (error) {
      return throwError(new Error('something went wrong'));
    }
  }

  createCandidate(candidate:any):Observable<any> {
    let url = 'http://localhost:5000/api/createCandidate';
    const candidateVal = candidate
    try {
      return this.http.post<any>(url, candidateVal);
    } catch (error) {
      return throwError(new Error('something went wrong'));
    }

  }

  updateCandidate(candidate:any):Observable<any> {
    let url = 'http://localhost:5000/api/updateCandidate';
    const candidateVal = candidate
    try {
      return this.http.put<any>(url,candidateVal);
    } catch (error) {
      return throwError(new Error('something went wrong'));
    }

  }


  
}
