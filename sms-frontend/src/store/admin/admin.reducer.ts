import { createReducer, on } from '@ngrx/store';
import {
  addCourse,
  addCourseError,
  addCourseSuccess,
  getCoursesSuccess,
} from './admin.actions';
import { AdminState } from '../../app/models/admin.model';

//change this any
const initialState:AdminState = {
  addCourseloader: false,
  error: false,
  errorMessage: '',
  courses: [],
};

export const adminReducer = createReducer(
  initialState,
  on(addCourse, (state) => ({
    ...state,
    addCourseloader: true,
    error: false,
    errorMessage: '',
  })),
  on(addCourseSuccess, (state) => ({
    ...state,
    addCourseloader: false,
    error: false,
    errorMessage: '',
  })),
  on(addCourseError, (state, payload) => ({
    ...state,
    addCourseloader: false,
    error: true,
    errorMessage: payload.message,
  })),
  on(getCoursesSuccess, (state, payload) => ({
    ...state,
    courses: payload.courses,
  }))
);
