import { createReducer, on } from '@ngrx/store';
import { setCourseRecords } from './courses.action';
import { CourseRecords } from '../../app/models/coureRecords.model';

const initialState:CourseRecords = {
  courseRecords: [{ courseCode: '', records: [] }],
};

export const courseReducer = createReducer(
  initialState,
  on(setCourseRecords, (state, payload) => {
    console.log(state);
    console.log(payload);
    return {...state}
  })
);
