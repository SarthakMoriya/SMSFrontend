import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ExamsService } from '../../services/exams.service';
import {
  addExam,
  isFailure,
  isSuccess,
  startLoader,
  stopLoader,
  updateExam,
} from './exam.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { ToastService } from '../../services/toast.service';
import { Store } from '@ngrx/store';
import { UserRecordService } from '../../services/pages/user-record.service';

@Injectable()
export class ExamEffects {
  private action$ = inject(Actions);
  private examService = inject(ExamsService);
  private toastSrv = inject(ToastService);
  private store = inject(Store);
  private userRecSrv = inject(UserRecordService);

  addExam$ = createEffect(() => {
    return this.action$.pipe(
      ofType(addExam),
      switchMap(({ examBody }) => {
        startLoader();
        return this.examService.addExam(examBody).pipe(
          map((response) => {
            if (!response) {
            }
            this.store.dispatch(isSuccess());
            this.toastSrv.showSuccess('Exam added successfully');
            this.userRecSrv.updateExamAddedNotification();
            return stopLoader();
          }),
          catchError((error) => {
            this.store.dispatch(isFailure());
            this.toastSrv.showError('Failed to add exam!');
            return of(stopLoader());
          })
        );
      })
    );
  });

  updateExam$ = createEffect(() => {
    return this.action$.pipe(
      ofType(updateExam),
      switchMap(({ examBody }) => {
        startLoader();
        return this.examService.updateExam(examBody).pipe(
          map((response) => {
            if (!response) {
            }
            this.store.dispatch(isSuccess());
            this.toastSrv.showSuccess('Exam updated successfully');
            // this.userRecSrv.updateExamAddedNotification();
            return stopLoader();
          }),
          catchError((error) => {
            this.store.dispatch(isFailure());
            this.toastSrv.showError('Failed to update exam!');
            return of(stopLoader());
          })
        );
      })
    );
  });
}
