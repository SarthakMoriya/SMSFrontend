import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Records } from '../../app/models/record.model';

const selectRecordsState = createFeatureSelector<Records>('records');

export const RecordsSelector = createSelector(
  selectRecordsState,
  (state: Records) => {
    return state.records;
  }
);
