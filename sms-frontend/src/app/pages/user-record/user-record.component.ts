import { Component, inject, OnInit } from '@angular/core';
import { RecordsService } from '../../../services/record.service';
import { ActivatedRoute } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AddExamFormComponent } from './add-exam-form/add-exam-form.component';
import { ExamsService } from '../../../services/exams.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-record',
  imports: [ButtonModule, AddExamFormComponent, TableModule, CommonModule],
  templateUrl: './user-record.component.html',
  styleUrl: './user-record.component.scss',
})
export class UserRecordComponent implements OnInit {
  service = inject(RecordsService);
  router = inject(ActivatedRoute);
  private examsSrv = inject(ExamsService);

  userData: any = {};
  isAddingExam: boolean = false;

  semesters = [1, 2, 3, 4, 5, 6, 7, 8];
  selectedSemester = 0;
  exams: {
    semester_number: number;
    exam_name: string;
    total_marks: string;
    obt_marks: string;
    exam_type: string;
  }[] = [];
  constructor() {}

  ngOnInit() {
    const { params, queryParams } = this.router.snapshot;
    this.userData.id = params['id'];
    this.userData = { ...params, ...queryParams };

    this.fetchSemesterExams(1);
  }
  addExam() {
    this.isAddingExam = true;
    console.log(this.isAddingExam);
  }

  async fetchSemesterExams(semester_number: number) {
    if (this.selectedSemester === semester_number) {
      return;
    }
    this.selectedSemester = semester_number;
    this.exams = await this.examsSrv.getSemesterExams(
      this.userData.id,
      this.userData.course,
      semester_number
    );
    console.log(this.exams);
  }
}
