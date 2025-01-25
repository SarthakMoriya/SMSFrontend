import { createReducer, on } from '@ngrx/store';
import {
  addExam,
  isFailure,
  isSuccess,
  startLoader,
  stopLoader,
} from './exam.actions';

const initialState = {
  exams: [],
  loader: false,
  isSuccess: false,
};

export const examReducer = createReducer(
  initialState,
  on(addExam, (state) => ({ ...state })),
  on(startLoader, (state) => ({ ...state, loader: true })),
  on(stopLoader, (state) => ({ ...state, loader: false })),
  on(isSuccess, (state) => ({ ...state, isSuccess: true })),
  on(isFailure, (state) => ({ ...state, isSuccess: false }))
);
