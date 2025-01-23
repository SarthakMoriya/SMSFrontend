import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Record } from '../app/models/record.model';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

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
}
