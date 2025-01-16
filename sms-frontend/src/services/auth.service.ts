import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ErrorInterface,
  Signup,
  SuccessInterface,
} from '../app/models/authModels';
import { UserState } from '../app/models/user.model';

interface LoginResponse {
  token: string;
  userDetails: { name: string; passcode: string };
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<UserState> {
    return this.http.post<UserState>('http://localhost:3000/auth/login', {
      email: username,
      password,
    });
  }

  /*
    - Userdata for login would look like Signup interface
    - This function would return an observable which we could subscribe to listen for changes and the data returned would be a generic succcess or error interface type
  */
  signup(userData: Signup): Observable<SuccessInterface | ErrorInterface> {
    return this.http.post<SuccessInterface | ErrorInterface>(
      'http://localhost:3000/auth/signup',
      userData
    );
  }
}
