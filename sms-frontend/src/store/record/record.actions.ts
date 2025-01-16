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
