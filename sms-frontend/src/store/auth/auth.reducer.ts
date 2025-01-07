import { createReducer, on } from '@ngrx/store';
import { loginFailure, loginSuccess } from './auth.actions';

export interface UserState {
  token: string | null;
  userDetails: { passcode: string; name: string } | null;
}

export const initialState: UserState = {
  token: null,
  userDetails: null,
};

export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { token, userDetails }) => ({
    ...state,
    token,
    userDetails,
  })),
  on(loginFailure, (state) => ({
    ...state,
    token: null,
    userDetails: null,
  }))
);
