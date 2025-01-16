import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Record } from '../app/models/record.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecordsService {
  constructor(private http: HttpClient) {}

  createRecord(record: Record): Observable<Record> {
    return this.http.post<Record>('http://localhost:3001/records/create', {...record});
  }
}
