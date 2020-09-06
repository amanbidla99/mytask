import { environment } from './../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private http: HttpClient) { }
  
  
  

  userreg(a,b,c): Observable<any>{
    const body = { email: a,
      password: b };

    return this.http.post('https://ltrx.herokuapp.com' + '/api/v1/auth/register',body);
  }

  userverification(a): Observable<any>{
    const body = { otp: 771567,
      hashToken: localStorage.getItem('hashToken')
       };
    return this.http.post('https://ltrx.herokuapp.com' + '/api/v1/auth/verification',body);
  }
  userLogin(a,b,c): Observable<any>{
    const body = { email: a,
      password: b };

    return this.http.post('https://ltrx.herokuapp.com' + '/api/v1/auth/login',body)
  }

  getUser(a): Observable<any>{
    return this.http.get('https://ltrx.herokuapp.com/api/v1/auth/user');
  }

  saveDetails(a): Observable<any>{
    const body = { firstname: 'test',
    lastname: 'user' };
    return this.http.put('https://ltrx.herokuapp.com/api/v1/auth/user',body)
  }

  refreshtoken(): Observable<any>{
    const body = { 
      refreshToken: localStorage.getItem('token')
       };
    return this.http.post('https://ltrx.herokuapp.com/api/v1/auth/user' + '/api/v1/auth/refreshToken',body);
  }
}
