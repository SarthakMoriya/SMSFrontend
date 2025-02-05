import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StudentRecord } from '../../app/models/record.model';

@Injectable({
  providedIn: 'root',
})
export class UserRecordService {
  private recordData$ = new BehaviorSubject<StudentRecord | undefined>(
    undefined
  );
  recordData = this.recordData$.asObservable();

  updateData(data: StudentRecord) {
    console.log(data);
    this.recordData$.next(data);
  }
}
