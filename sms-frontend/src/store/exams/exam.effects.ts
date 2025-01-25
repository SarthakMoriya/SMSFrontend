import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ExamsService } from '../../services/exams.service';
import {
  addExam,
  isFailure,
  isSuccess,
  startLoader,
  stopLoader,
} from './exam.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { ToastService } from '../../services/toast.service';
import { Store } from '@ngrx/store';

@Injectable()
export class ExamEffects {
  private action$ = inject(Actions);
  private examService = inject(ExamsService);
  private toastSrv = inject(ToastService);
  private store = inject(Store);

  addExam$ = createEffect(() => {
    return this.action$.pipe(
      ofType(addExam),
      switchMap(({ examBody }) => {
        startLoader();
        return this.examService.addExam(examBody).pipe(
          map((response) => {
            console.log(response);
            if (!response) {
            }
            this.store.dispatch(isSuccess());
            this.toastSrv.showSuccess('Exam added successfully');
            return stopLoader();
          }),
          catchError((error) => {
            console.log(error);
            this.store.dispatch(isFailure());
            this.toastSrv.showError('Failed to add exam!');
            return of(stopLoader());
          })
        );
      })
    );
  });
}
