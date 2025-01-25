import { Component, inject, input, OnInit } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { DatePickerModule } from 'primeng/datepicker';
import { ProgressSpinner } from 'primeng/progressspinner';
import moment from 'moment';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { examStateLoaderSelector, examStateModalSelector } from '../../../../store/exams/exam.selector';
import {
  addExam,
  startLoader,
  stopLoader,
} from '../../../../store/exams/exam.actions';
import { ExamBody } from '../../../models/exam.model';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-add-exam-form',
  imports: [
    Dialog,
    ButtonModule,
    InputTextModule,
    FormsModule,
    SelectModule,
    CommonModule,
    ReactiveFormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    FloatLabelModule,
    DatePickerModule,
    ProgressSpinner,
  ],
  templateUrl: './add-exam-form.component.html',
  styleUrl: './add-exam-form.component.scss',
})
export class AddExamFormComponent implements OnInit {
  router = inject(ActivatedRoute);
  store = inject(Store);

  loader$: Observable<any> | undefined;
  loader: boolean = false;

  isSuccess$:Observable<boolean> | undefined;
  isSuccess:boolean = false;

  examForm: FormGroup = new FormGroup({
    exam_name: new FormControl('', { validators: [Validators.required] }),
    total_marks: new FormControl('', { validators: [Validators.required] }),
    obt_marks: new FormControl('', { validators: [Validators.required] }),
    semester_number: new FormControl('Semester-1', {
      validators: [Validators.required],
    }),
    exam_type: new FormControl('Mid-Term', {
      validators: [Validators.required],
    }),
    exam_date: new FormControl('', {
      validators: [Validators.required],
    }),
  });
  courses: any[] = [
    { name: 'Semester-1', code: '1' },
    { name: 'Semester-2', code: '2' },
    { name: 'Semester-3', code: '3' },
    { name: 'Semester-4', code: '4' },
    { name: 'Semester-5', code: '5' },
    { name: 'Semester-6', code: '6' },
    { name: 'Semester-7', code: '7' },
    { name: 'Semester-8', code: '8' },
  ];
  examSessions = [
    { name: 'Mid-Term', code: 'mt' },
    { name: 'Final-Term', code: 'ft' },
  ];

  student_id: number | undefined;
  teacher_id: number | undefined;
  course_name: string | undefined;
  selectedSemester = 'Semester-1';
  visible: boolean = true;

  ngOnInit() {
    const { queryParams } = this.router.snapshot;
    this.student_id = queryParams['studId'];
    this.teacher_id = parseInt(queryParams['teacher_id']);
    this.course_name = queryParams['course'];


    this.loader$ = this.store.select(examStateLoaderSelector);
    this.loader$.subscribe((data) => {
      console.log("LOADER:",data)
      this.loader = data;
    });


    this.isSuccess$ = this.store.select(examStateModalSelector);
    this.isSuccess$.subscribe((data) => {
      console.log("IS SUCCESS::",data)
      this.isSuccess = data;
      data && this.examForm.reset();
    });
  }

  showDialog() {
    this.visible = true;
  }

  onSubmit() {
    let obj: ExamBody = {
      student_id: this.student_id,
      course_name: this.course_name,
      teacher_id: this.teacher_id,
      semester_number: this.examForm.value.semester_number.code,
      exam_type: this.examForm.value.exam_type.code,
      exam_name: this.examForm.value.exam_name,
      obt_marks: this.examForm.value.obt_marks,
      total_marks: this.examForm.value.total_marks,
      exam_date: moment(new Date(this.examForm.value.exam_date)).format(
        'YYYY-MM-DD'
      ),
    };
    this.store.dispatch(startLoader());
    this.store.dispatch(addExam({ examBody: obj }));
  }
}
