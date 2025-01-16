import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface UserState {
  token: string;
    name: string;
    email: string;
    passcode: string;
    id: string;
    verified: string;
    admin_approved: string;
    updated_at: string;
    created_at: string;
}

export const selectUserState = createFeatureSelector<UserState>('auth');

export const selectUserToken = createSelector(
  selectUserState,
  (state: UserState) => state.token
);
export const selectUserDetails = createSelector(
  selectUserState,
  (state: UserState) => {
    console.log(state)
    return state;
  }
);
