import { createReducer, on } from '@ngrx/store';
import { setCourseRecords, setCourseRecordsSuccess } from './courses.action';
import { CourseRecords } from '../../app/models/coureRecords.model';

const initialState: CourseRecords = {
  courseRecords: [],
};

export const courseReducer = createReducer(
  initialState,
  on(setCourseRecords, (state, payload) => {
    return { ...state };
  }),
  on(setCourseRecordsSuccess, (state, payload) => {
    const cc = payload.body.courseCode;

    // Find index of the course record with the same course code
    const oldCCRecordsIndex = state.courseRecords.findIndex(
      (cr) => cr.courseCode === cc
    );


    let updatedCourseRecords;

    if (oldCCRecordsIndex === -1) {
      updatedCourseRecords = [
        ...state.courseRecords,
        {
          courseCode: cc,
          records: [...payload.body.records], // Spread records to ensure immutability
        },
      ];

    } else {
      // If the course code exists, update its records
      updatedCourseRecords = state.courseRecords.map((cr, index) =>
        index === oldCCRecordsIndex
          ? {
              ...cr,
              records: [...payload.body.records], // Combine old and new records immutably
            }
          : cr
      );
    }

    // Return the new state with updated courseRecords
    return {
      ...state,
      courseRecords: updatedCourseRecords,
    };
  })
);
