import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addCourse,
  addCourseError,
  addCourseSuccess,
  getCourses,
  getCoursesFailure,
  getCoursesSuccess,
} from './admin.actions';
import { AdminService } from '../../services/pages/admin.service';
import { catchError, map, of, switchMap } from 'rxjs';
import { ToastService } from '../../services/toast.service';

@Injectable()
export class AdminEffect {
  actions$ = inject(Actions);
  service = inject(AdminService);
  toastSrv = inject(ToastService);

  addCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addCourse), //filter this action only
      switchMap(({ name, code, semesters }) => {
        return this.service.insertCourse({ name, code, semesters }).pipe(
          map((response) => {
            response.code == 200 &&
              response.status == 'success' &&
              this.toastSrv.showSuccess('Exam added successfully!');
            return response.code == 200 && response.status == 'success'
              ? addCourseSuccess()
              : addCourseError({ message: response.message });
          }),
          catchError((error) => {
            this.toastSrv.showError('Failed to add exam!');
            return of(addCourseError({ message: error.message }));
          })
        );
      })
    )
  );
  getCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCourses),
      switchMap(() => {
        return this.service.getCourses().pipe(
          map((response) => {
            response.code == 200 &&
              response.status == 'success' &&
              this.toastSrv.showSuccess('Courses fetched successfully!');
            return response.code == 200 && response.status == 'success'
              ? getCoursesSuccess({ courses: response.body })
              : getCoursesFailure({ message: response.message });
          }),
          catchError((error) => {
            this.toastSrv.showError('Failed to fetch courses!');
            return of(getCoursesFailure({ message: error.message }));
          })
        );
      })
    )
  );
}
