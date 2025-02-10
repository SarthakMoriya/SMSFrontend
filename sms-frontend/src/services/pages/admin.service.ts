import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Response } from '../../app/models/global.model';
import { Observable } from 'rxjs';
import { Course, CourseExam } from '../../app/models/admin.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private http = inject(HttpClient);

  insertCourse(course: Course): Observable<Response> {
    console.log(course);
    return this.http.post<Response>(
      'http://localhost:3003/admin/add-course',
      course
    );
  }
  getCourses(): Observable<Response> {
    return this.http.get<Response>('http://localhost:3003/admin/get-courses');
  }
  insertCourseExam(exam:CourseExam): Observable<Response> {
    return this.http.post<Response>(
      'http://localhost:3003/admin/add-course-exam',
      exam
    );
  }
}
