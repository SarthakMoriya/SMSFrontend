import { createReducer, on } from '@ngrx/store';
import {
  loginFailure,
  loginSuccess,
  signup,
  signupFailure,
  signupSuccess,
} from './auth.actions';
import { UserState } from '../../app/models/user.model';

export const initialState: UserState = {
  // token: '',
  // name: '',
  // email: '',
  // passcode: '',
  // id: '',
  // verified: '',
  // admin_approved: '',
  // updated_at: '',
  // created_at: '',

  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWFjaGVySWQiOjE1LCJpYXQiOjE3MzcwNDI0MTUsImV4cCI6MTczNzEyODgxNX0.k7sdC1fhMuRAeg4Fy6tHQmcmPavxD9ed5qUbp5-VXIg',
  name: 'Test',
  email: 'test@gmail.com',
  passcode: '1234',
  id: '15',
  verified: '0',
  admin_approved: '0',
  updated_at: '2025-01-11T13:42:56.000Z',
  created_at: '2025-01-11T13:42:56.000Z',
};

export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, payload) => ({
    ...state,
    ...payload,
  })),
  on(loginFailure, (state) => ({
    ...state,
    token: '',
    name: '',
    email: '',
    passcode: '',
    id: '',
    verified: '',
    admin_approved: '',
    updated_at: '',
    created_at: '',
  })),
  on(signupFailure, (state) => ({
    ...state,
  })),
  on(signupSuccess, (state) => ({
    ...state,
  }))
);
