import { createAction, props } from '@ngrx/store';
import { Course, Courses } from '../../app/models/admin.model';

export const addCourse = createAction('[Admin] addCourse', props<Course>());
export const addCourseSuccess = createAction('[Admin] addCourseSuccess');
export const addCourseError = createAction(
  '[Admin] addCourseError',
  props<{ message: string }>()
);

export const getCourses = createAction('[Admin] getCourses');
export const getCoursesSuccess = createAction(
  '[Admin] getCoursesSuccess',
  props<{ courses: Courses[] }>()
);
export const getCoursesFailure = createAction(
  '[Admin] getCoursesFailure',
  props<{ message: string }>()
);
