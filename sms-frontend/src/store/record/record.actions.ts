import { createAction, props } from '@ngrx/store';
import { Record } from '../../app/models/record.model';

export const createRecord = createAction(
  '[User] CreateRecord',
  props<{ record: Record }>()
);
export const createRecordSuccess = createAction(
  '[User] CreateRecordSuccess',
  props<{ record: Record }>()
);
export const createRecordFail = createAction('[User] CreateRecordFail');

export const courseSelect=createAction(
  '[User] CourseSelect',
  props<{course:string}>()
)

export const recordDelete = createAction('[User] RecordDelete', props<{ id: number }>());
export const recordDeleteS = createAction('[User] RecordDeleteS');
export const recordDeleteF = createAction('[User] RecordDeleteF')