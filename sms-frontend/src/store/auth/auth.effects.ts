import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../services/auth.service';
import { login, loginFailure, loginSuccess } from './auth.actions';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  authService = inject(AuthService);
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
}
