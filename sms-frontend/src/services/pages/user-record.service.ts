import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StudentRecord } from '../../app/models/record.model';

@Injectable({
  providedIn: 'root',
})
export class UserRecordService {
  private recordData$ = new BehaviorSubject<StudentRecord | undefined>(undefined);
  recordData = this.recordData$.asObservable();
  
  private examAddedNotify$ = new BehaviorSubject<void>(undefined);
  examAddedNotify = this.examAddedNotify$.asObservable();

  private semesterGraph$ = new BehaviorSubject<any>(undefined);
  semesterGraph = this.semesterGraph$.asObservable();

  updateData(data: StudentRecord) {
    this.recordData$.next(data);
  }
  updateSemesterGraphData(data: any[]) {
    this.semesterGraph$.next(data);
  }

  updateExamAddedNotification() {
    console.log("I AM BEING CALLED")
    this.examAddedNotify$.next();
  }
}
