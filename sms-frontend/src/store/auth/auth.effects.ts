import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../services/auth.service';
import {
  login,
  loginFailure,
  loginSuccess,
  signup,
  signupFailure,
  signupSuccess,
} from './auth.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { Signup } from '../../app/models/authModels';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  authService = inject(AuthService);
  router=inject(Router)
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap(({ username, password }) => {
        return this.authService.login(username, password).pipe(
          map((response) => {
            if (!response) {
              console.error('Login response is undefined or null');
              return loginFailure({
                error: 'Login failed, no response',
              });
            }
            return loginSuccess({
              token: response.token,
              userDetails: response.userDetails,
            });
          }),
          catchError((error) => {
            console.error('Login error:', error);
            return of(
              loginFailure({
                error: error.message || 'Login failed',
              })
            );
          })
        );
      })
    )
  );

  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signup),
      switchMap((userData:Signup) => {
        return this.authService.signup({...userData}).pipe(
          map((response) => {
            if (!response) {
              console.log('ERROR IN SIGNUP');
              return signupFailure({
                error: 'Signup failed',
              });
            }
            this.router.navigate(['login']);
            return signupSuccess({
              message: 'Signup Success',
            });
          }),
          catchError((error) => {
            console.log('Signup error: ' + error);
            return of(
              signupFailure({
                error: 'Signup Failed',
              })
            );
          })
        );
      })
    )
  );
}
