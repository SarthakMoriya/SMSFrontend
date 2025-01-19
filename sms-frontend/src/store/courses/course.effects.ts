import { inject, Injectable } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  setCourseRecords,
  setCourseRecordsFail,
  setCourseRecordsSuccess,
} from './courses.action';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class CourseEffects {
  private action$ = inject(Actions);
  private courseService = inject(CourseService);

  getCourseRecords$ = createEffect(() =>
    this.action$.pipe(
      ofType(setCourseRecords),
      switchMap(({ courseCode }) => {
        return this.courseService.getCourseRecords(courseCode).pipe(
          map((response) => {
            console.log(response.body);
            if (!response) {
              console.log('ERROR GETTING COURSE RECORDS');
            }
            console.log(response);
            return setCourseRecordsSuccess(response);
          }),
          catchError(() => {
            console.log('ERROR');
            return of(setCourseRecordsFail());
          })
        );
      })
    )
  );
}
