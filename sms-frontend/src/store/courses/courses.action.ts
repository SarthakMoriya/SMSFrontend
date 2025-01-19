import { createAction, props } from '@ngrx/store';
import { CourseRecordsSuccess } from '../../app/models/coureRecords.model';

export const setCourseRecords = createAction(
  '[Course] SetCourseRecords',
  props<{ courseCode: string }>()
);
export const setCourseRecordsSuccess = createAction(
  '[Course] SetCourseRecordsSuccess',
  props<CourseRecordsSuccess>()
);
export const setCourseRecordsFail = createAction(
  '[Course] SetCourseRecordsFail'
);
