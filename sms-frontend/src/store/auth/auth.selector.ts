import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface UserState {
  token: string;
  userDetails: {
    name: string;
    email: string;
    passcode: string;
    id:string;
    verified:string;
    admin_approved:string;
    updated_at:string;
    created_at:string;
  };
}

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectUserToken = createSelector(
  selectUserState,
  (state: UserState) => state.token
);
