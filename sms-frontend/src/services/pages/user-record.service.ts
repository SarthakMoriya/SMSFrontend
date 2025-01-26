import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserRecordService {
  private recordData$ = new BehaviorSubject<any>(null);
  recordData = this.recordData$.asObservable();

  updateData(data: any) {
    console.log(data);
    this.recordData$.next(data);
  }
}
