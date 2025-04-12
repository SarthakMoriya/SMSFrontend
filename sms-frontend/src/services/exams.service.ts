import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ExamAddSuccess,
  ExamBody,
  SuccessResponse,
} from '../app/models/exam.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class ExamsService {
  private service = inject(HttpClient);
  private httpService = inject(HttpService);

  addExam(examBody: ExamBody): Observable<ExamAddSuccess> {
    return this.service.post<ExamAddSuccess>(
      'http://localhost:3002/exams/addexams',
      {
        ...examBody,
      }
    );
  }
  updateExam(examBody: ExamBody): Observable<ExamAddSuccess> {
    return this.service.put<ExamAddSuccess>(
      `http://localhost:3002/exams/update-exam/${examBody.course_name}`,
      {
        ...examBody,
      }
    );
  }
  async getSemesterExams(
    studentId: number,
    db: string,
    semester_number: number
  ) {
    return this.httpService
      .getData(
        `http://localhost:3002/exams/semesterexams/${studentId}/${db}/${semester_number}`
      )
      .then((data) => {
        const { code, body } = data as SuccessResponse;
        if (code == 200) {
          return body;
        }else{
          return []
        }
      })
      .catch((err) => {
        console.log(err);
        return [];
      });
  }
}
