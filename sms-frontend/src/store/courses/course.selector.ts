import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CourseRecords } from '../../app/models/coureRecords.model';

const selectCourseState = createFeatureSelector<CourseRecords>('course');

export const courseRecordsSelector = createSelector(
  selectCourseState,
  (state: CourseRecords) => {
    return state;
  }
);
