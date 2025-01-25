import { createAction, props } from '@ngrx/store';
import { ExamBody } from '../../app/models/exam.model';

export const addExam = createAction('[Exam] addExam', props<{examBody:ExamBody}>());
export const startLoader = createAction('[Exam] startLoader');
export const stopLoader = createAction('[Exam] stopLoader');
export const isSuccess = createAction('[Exam] examAddSuccess');
export const isFailure  = createAction('[Exam] examAddFailed');
