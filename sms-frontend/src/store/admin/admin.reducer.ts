import { createReducer, on } from '@ngrx/store';
import {
  addCourse,
  addCourseError,
  addCourseExam,
  addCourseExamFailure,
  addCourseExamSuccess,
  addCourseSuccess,
  getCoursesSuccess,
} from './admin.actions';
import { AdminState } from '../../app/models/admin.model';

//change this any
const initialState: AdminState = {
  addCourseloader: false,
  error: false,
  errorMessage: '',
  courses: [],
  addExamloader: false,
  addExamErr: false,
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
  })),
  on(addCourseExam, (state) => ({
    ...state,
    addExamloader: true,
    addExamErr: false,
  })),
  on(addCourseExamSuccess, (state) => ({
    ...state,
    addExamloader: false,
    addExamErr: false,
  })),
  on(addCourseExamFailure, (state, { message }) => ({
    ...state,
    addExamloader: false,
    addExamErr: message,
  }))
);
