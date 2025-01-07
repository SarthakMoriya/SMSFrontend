import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserState } from '../store/auth/auth.selector';

interface LoginResponse {
  token: string;
  userDetails: { name: string; passcode: string };
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(
    username: string,
    password: string
  ): Observable<UserState> {
    return this.http.post<UserState>('http://localhost:3000/auth/login', {
      email:username,
      password,
    });
  }
}
