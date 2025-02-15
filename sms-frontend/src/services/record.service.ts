import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Record, StudentRecord } from '../app/models/record.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';
import { SuccessResponse } from '../app/models/exam.model';

@Injectable({
  providedIn: 'root',
})
export class RecordsService {
  constructor(private http: HttpClient, private service: HttpService) {}

  createRecord(record: Record): Observable<Record> {
    return this.http.post<Record>('http://localhost:3001/records/create', {
      ...record,
    });
  }

  getRecordExams(course: string, stuId: number) {
    this.service
      .getData(`http://localhost:3002/exams/studentexams/${stuId}/${course}`)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async getSemesterExamTotal(stuId: string, course: string) {
    return this.service
      .getData(
        `http://localhost:3002/exams/all-semester-total/${stuId}/${course}`
      )
      .then((data) => {
        const { code, body } = data as SuccessResponse;
        return body;
      })
      .catch((err) => {
        console.log(err);
        return [];
      });
  }

  async getStudentProfileData(userId: string | number) {
    return this.service
      .getData(`http://localhost:3001/records/record/${userId}`)
      .then((data) => {
        const { code, body, status } = data as SuccessResponse;
        if (code === 200 && status == 'success') {
          return body;
        } else {
          return undefined;
        }
      })
      .catch((err) => {
        console.log(err);
        return undefined;
      });
  }
}
