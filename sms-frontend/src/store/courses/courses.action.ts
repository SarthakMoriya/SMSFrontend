import { createAction, props } from '@ngrx/store';

export const setCourseRecords = createAction(
  '[Course] SetCourseRecords',
  props<{ courseCode: string }>()
);
export const setCourseRecordsSuccess = createAction(
  '[Course] SetCourseRecordsSuccess'
);
