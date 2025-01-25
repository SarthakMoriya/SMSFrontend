import { createSelector, createFeatureSelector } from '@ngrx/store';

const selectExamState = createFeatureSelector<{
  exams: [];
  loader: boolean;
  isSuccess: boolean;
}>('exam');

export const examStateLoaderSelector = createSelector(
  selectExamState,
  (state: { exams: []; loader: boolean; isSuccess: boolean }) => {
    return state.loader;
  }
);
//to reset set form
export const examStateModalSelector = createSelector(
  selectExamState,
  (state: { exams: []; loader: boolean; isSuccess: boolean }) => {
    return state.isSuccess;
  }
);
