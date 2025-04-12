import { Component, inject, OnInit } from '@angular/core';
import { RecordsService } from '../../../services/record.service';
import { ActivatedRoute } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AddExamFormComponent } from './add-exam-form/add-exam-form.component';
import { ExamsService } from '../../../services/exams.service';
import { CommonModule } from '@angular/common';
import { SemesterTotalComponent } from './semester-total/semester-total.component';
import { UserRecordService } from '../../../services/pages/user-record.service';
import { StackbarChartComponent } from './stackbar-chart/stackbar-chart.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditExamComponent } from './edit-exam/edit-exam.component';

@Component({
  selector: 'app-user-record',
  imports: [
    ButtonModule,
    AddExamFormComponent,
    EditExamComponent,
    TableModule,
    CommonModule,
    SemesterTotalComponent,
    StackbarChartComponent,
    UserProfileComponent,
  ],
  templateUrl: './user-record.component.html',
  styleUrl: './user-record.component.scss',
})
export class UserRecordComponent implements OnInit {
  service = inject(RecordsService);
  router = inject(ActivatedRoute);
  userRecordSrv = inject(UserRecordService);
  private examsSrv = inject(ExamsService);

  userData: any = {};
  isAddingExam: boolean = false;
  isEditingExam: boolean = false;
  semestersGraphData: any = {};

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

    this.userRecordSrv.updateData(this.userData);

    this.userRecordSrv.semesterGraph.subscribe((data) => {
      if (data) {
        let datapoints = data.map((item: any) => item.overall_percentage);
        let axis = data.map((item: any) => item.semester_number);
        this.semestersGraphData = {
          datapoints,
          axis,
        };
      }
    });
  }
  addExam() {
    this.isAddingExam = true;
  }

  async fetchSemesterExams(semester_number: number) {
    // if (this.selectedSemester === semester_number) {
    //   return;
    // }
    this.selectedSemester = semester_number;
    this.exams = await this.examsSrv.getSemesterExams(
      this.userData.id,
      this.userData.course,
      semester_number
    );
    console.log(this.exams);
  }

  openEditModal(exam:any){
    this.isEditingExam=true;
    console.log(exam)
  }
}
