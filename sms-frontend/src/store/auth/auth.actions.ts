import { createAction, props } from '@ngrx/store';
import { Signup } from '../../app/models/authModels';

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
  '[Auth] LoginFailure',
  props<{ error: string }>()
);

/* -------------------------------------------------------SIGNUP ACTIONS----------------------------------------------- */
export const signup = createAction('[Auth] Signup', props<Signup>());

//Emits an acton with payload(token,userDetails)
export const signupSuccess = createAction(
  '[Auth] SignupSuccess',
  props<{ message: string }>()
);

// Emits an action with payload (error)
export const signupFailure = createAction(
  '[Auth] SignupFailure',
  props<{ error: string }>()
);
