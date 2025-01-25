import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExamAddSuccess, ExamBody } from '../app/models/exam.model';



@Injectable({
  providedIn: 'root',
})
export class ExamsService {
  private service = inject(HttpClient);

  addExam(examBody: ExamBody): Observable<ExamAddSuccess> {
    return this.service.post<ExamAddSuccess>(
      'http://localhost:3002/exams/addexams',
      {
        ...examBody,
      }
    );
  }
}
