import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, Subscription } from 'rxjs';
import { selectAdminState } from '../../../../store/admin/admin.selector';
import { DialogModule } from 'primeng/dialog';

import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { debounceTime, map, catchError, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { CommonModule } from '@angular/common';
import { addCourseExam } from '../../../../store/admin/admin.actions';
import { ProgressSpinner } from 'primeng/progressspinner';

@Component({
  selector: 'app-add-exam',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    Select,
    ProgressSpinner
  ],
  templateUrl: './add-exam.component.html',
  styleUrl: './add-exam.component.scss',
})
export class AddExamComponent implements OnInit, OnDestroy {
  private store = inject(Store);
  private http = inject(HttpClient);

  courses$: Observable<any> = this.store.select(selectAdminState);
  courses = [];
  selectedCoursesemesters: any = [];
  selectedCourseId = '';
  coursesSub = new Subscription();
  selectedCourse = null;

  addExamLoader = false;
  addExamError: string | boolean = false;

  visible: boolean = false;

  form = new FormGroup({
    exam_name: new FormControl('DSA', {
      validators: [Validators.required],
    }),
    exam_code: new FormControl('12', {
      validators: [Validators.required],
      asyncValidators: [this.examCodeValidator(this.http)],
      updateOn: 'blur', // Validate on blur to avoid excessive API calls
    }),
    semester: new FormControl('', { validators: [Validators.required] }),
    max_marks: new FormControl('', { validators: [Validators.required] }),
    min_marks: new FormControl('', { validators: [Validators.required] }),
  });

  ngOnInit() {
    this.coursesSub = this.courses$?.subscribe((courses) => {
      this.courses = courses.courses;
      this.selectedCourse = courses[0];

      this.addExamLoader=courses.addExamloader;
      this.addExamError=courses.addExamErr;
      console.log(this.addExamError,this.addExamLoader);

      if(!this.addExamLoader && !this.addExamError) this.form.reset();
    });
  }

  showDialog() {
    this.visible = true;
  }

  onSubmit() {
    const { exam_code, exam_name, semester, min_marks, max_marks } =
      this.form.value;
    const { code } = semester as any;
    let obj = {
      name: exam_name,
      semester_no: code,
      max_marks,
      min_marks,
      course_id: this.selectedCourseId,
      exam_code: exam_code,
    };
    this.store.dispatch(addCourseExam(obj));
  }
  handleCourseSelect(event: any) {
    console.log(event);
    const { semesters, id } = event.value;
    this.selectedCoursesemesters = Array.from({ length: semesters }, (_, i) => {
      return { name: i + 1, code: i + 1 };
    });
    this.selectedCourseId = id;
  }

  handleExamCode() {
    const { exam_code } = this.form.value;
    console.log(exam_code);
  }

  examCodeValidator(http: HttpClient): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (!control.value) return of(null); // Skip validation if empty

      return of(control.value).pipe(
        debounceTime(500), // Prevent unnecessary API calls
        switchMap((value) =>
          http.get<{ exists: boolean }>(
            `http://localhost:3002/exams/get-exam-codes/${value}`
          )
        ),
        map((response: any) =>
          response.body.isExisting ? { exam_code: true } : null
        ), // Return error if exists
        catchError(() => of(null)) // Handle errors gracefully
      );
    };
  }

  ngOnDestroy() {
    this.coursesSub.unsubscribe();
  }
}
