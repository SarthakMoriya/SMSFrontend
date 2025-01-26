import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { UserRecordService } from '../../../../services/pages/user-record.service';
import { Subscription } from 'rxjs';
import { RecordsService } from '../../../../services/record.service';
import { Record } from '../../../models/record.model';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-semester-total',
  imports: [TableModule, CommonModule],
  templateUrl: './semester-total.component.html',
  styleUrl: './semester-total.component.scss',
})
export class SemesterTotalComponent implements OnInit, OnDestroy {
  private userRecordParentSrv = inject(UserRecordService);
  private http = inject(RecordsService);

  private subscription: Subscription = new Subscription();
  userData: Record | any = {
    stu_name: '',
    date_enrolled: '',
    teacher_id: null,
    course: '',
    rollno: '',
    stuId: '',
  };

  semesterTotal = [];

  ngOnInit() {
    this.subscription = this.userRecordParentSrv.recordData.subscribe(
      (data) => {
        this.userData = data;
        console.log(this.userData);
      }
    );
    this.fetchSemesterTotal();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe(); // Cancel the subscription
  }

  async fetchSemesterTotal() {
    this.semesterTotal = await this.http.getSemesterExamTotal(
      this.userData.id,
      this.userData.course
    );
  }
}
