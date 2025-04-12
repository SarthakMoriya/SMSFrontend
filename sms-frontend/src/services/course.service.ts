import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseRecords, CourseRecordsSuccess } from '../app/models/coureRecords.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private http: HttpClient) {}

  getCourseRecords(courseCode: string): Observable<CourseRecordsSuccess> {
    return this.http.get<CourseRecordsSuccess>(
      `http://localhost:3001/records/courserecords/${courseCode}`
    );
  }

}
