import { createAction, props } from '@ngrx/store';

//Emits an action having payload(username,password)
export const login = createAction(
  '[Auth] Login',
  props<{ username: string; password: string }>()
);

//Emits an acton with payload(token,userDetails)
export const loginSuccess = createAction(
  '[Auth] LoginSuccess',
  props<{ token: string; userDetails: { name: string; passcode: string } }>()
);

// Emits an action with payload (error)
export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);
