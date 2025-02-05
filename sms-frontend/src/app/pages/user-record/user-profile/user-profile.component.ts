import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserRecordService } from '../../../../services/pages/user-record.service';
import { StudentRecord } from '../../../models/record.model';
import { RecordsService } from '../../../../services/record.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  imports: [NgStyle],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent implements OnInit, OnDestroy {
  service = inject(UserRecordService);
  httpSrv = inject(RecordsService);

  private subscriptions: Subscription[] = [];
  public userObjSub = new Subscription();
  public userObj: StudentRecord | undefined; // one saved in params

  userData: StudentRecord | undefined; // to be used in html
  userDataLoader = false;

  percentageProgressBar = `conic-gradient(gray ${'10'}%, transparent 0%)`;
  semesterProgressBar = `conic-gradient(gray ${'88'}%, transparent 0%)`;

  ngOnInit(): void {
    this.userObjSub = this.service.recordData.subscribe((data) => {
      this.userObj = data;
    });
    this.subscriptions.push(this.userObjSub);
    this.getStudentProfileData();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => {
      console.log('Deletre sub');
      sub.unsubscribe();
    });
  }
  getStudentProfileData() {
    this.userDataLoader = true;
    this.httpSrv
      .getStudentProfileData(this.userObj?.studId || '')
      .then((data) => {
        this.userData = data;
        this.percentageProgressBar = `conic-gradient(gray ${
          this.userData?.overall_percentage?.split('%')[0]
        }%, transparent 0%)`;
        this.semesterProgressBar = `conic-gradient(gray ${
          ((this.userData?.semester_done ?? 0) / (this.userData?.semester ?? 1)) * 100
        }%, transparent 0%)`;
      })
      .catch((err) => {
        console.log(err);
        this.userData = undefined;
      })
      .finally(() => {
        this.userDataLoader = false;
      });
  }
}
