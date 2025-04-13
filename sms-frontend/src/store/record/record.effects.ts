import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RecordsService } from '../../services/record.service';
import { Router } from '@angular/router';
import {
  createRecord,
  createRecordFail,
  createRecordSuccess,
  recordDelete,
  recordDeleteF,
  recordDeleteS,
} from './record.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { Record } from '../../app/models/record.model';

@Injectable()
export class RecordsEffects {
  private action$ = inject(Actions);
  private recordsService = inject(RecordsService);
  private router = inject(Router);

  createRecord$ = createEffect(() =>
    this.action$.pipe(
      ofType(createRecord),
      switchMap(({ record }) => {
        return this.recordsService.createRecord(record).pipe(
          map((response) => {
            if (!response) {
            }
            this.router.navigate(['']);
            return createRecordSuccess({ record });
          }),
          catchError((error) => {
            return of(createRecordFail());
          })
        );
      })
    )
  );
  deleteRecord$ = createEffect(() =>
    this.action$.pipe(
      ofType(recordDelete),
      switchMap(({id})=>{
        return this.recordsService.deleteRecord(id).pipe(
          map(response=>{
            if(!response){}
            this.router.navigate(['']);
            return recordDeleteS()
          }),
          catchError((error)=>{
            return of(recordDeleteF())
          })
        )
      })
    )
  )
}
