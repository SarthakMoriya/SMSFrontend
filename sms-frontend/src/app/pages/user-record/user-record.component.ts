import { Component, inject, OnInit } from '@angular/core';
import { RecordsService } from '../../../services/record.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AddExamFormComponent } from "./add-exam-form/add-exam-form.component";

@Component({
  selector: 'app-user-record',
  imports: [ButtonModule, AddExamFormComponent],
  templateUrl: './user-record.component.html',
  styleUrl: './user-record.component.scss',
})
export class UserRecordComponent implements OnInit {
  service = inject(RecordsService);
  router = inject(ActivatedRoute);

  userData: any = {};
  isAddingExam: boolean = false;

  constructor() {}

  ngOnInit() {
    const { params, queryParams } = this.router.snapshot;
    this.userData.id = params['id'];
    this.userData = { ...params, ...queryParams };
    console.log(this.userData);
  }
  addExam() {
    this.isAddingExam = true;
    console.log(this.isAddingExam)
  }
}
