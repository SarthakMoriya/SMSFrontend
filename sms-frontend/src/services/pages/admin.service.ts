import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Response } from '../../app/models/global.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Course, CourseExam } from '../../app/models/admin.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private http = inject(HttpClient);
  private unverifiedAccounts = new BehaviorSubject<any[]>([]);
  public unverifiedAcountsObv = this.unverifiedAccounts.asObservable();

  setUnverifiedAccounts(data: any) {
    this.unverifiedAccounts.next(data);
  }

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

  insertCourseExam(exam: CourseExam): Observable<Response> {
    return this.http.post<Response>(
      'http://localhost:3003/admin/add-course-exam',
      exam
    );
  }

  getUnverifiedAccounts() {
    this.http
      .get<Response>('http://localhost:3003/admin/unverified-accounts')
      .subscribe(
        (response: Response) => {
          if (response.code == 200 && response.status == 'success') {
            this.setUnverifiedAccounts(response.body);
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }

  updateAccountStatus(id: number, status: string) {
    return this.http.patch<Response>(
      `http://localhost:3003/admin/approve-unverified-accounts/${id}/${status}`,
      ''
    );
  }
}
