import { createReducer, on } from '@ngrx/store';
import { Records } from '../../app/models/record.model';
import { createRecord, createRecordSuccess } from './record.actions';

const initialState: Records = {
  records: [],
};

export const recordsReducer = createReducer(
  initialState,
  on(createRecord, (state, { record }) => ({
    ...state,
  })),
  on(createRecordSuccess, (state, { record }) => ({
    ...state,
    records: [...state.records, record],
  }))
);
