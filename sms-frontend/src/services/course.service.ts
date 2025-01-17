import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseRecords } from '../app/models/coureRecords.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private http: HttpClient) {}

  getCourseRecords(courseCode: string): Observable<CourseRecords> {
    return this.http.get<CourseRecords>(
      `http://localhost:3001/records/courserecords/${courseCode}`
    );
  }
}
