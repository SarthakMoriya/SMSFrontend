import { Component, inject, input, OnInit } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { DatePickerModule } from 'primeng/datepicker';
import { ProgressSpinner } from 'primeng/progressspinner';

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
import { selectAdminState } from '../../../../store/admin/admin.selector';
import { addCourse } from '../../../../store/admin/admin.actions';


@Component({
  selector: 'app-add-course',
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
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.scss',
})
export class AddCourseComponent implements OnInit {
  router = inject(ActivatedRoute);
  store = inject(Store);

  loader$: Observable<any> | undefined;
  loader: boolean = false;

  isError: boolean = false;
  errorMessage: string ='';

  examForm: FormGroup = new FormGroup({
    course_name: new FormControl('Bsc-IT', { validators: [Validators.required] }),
    course_code: new FormControl('bscit', { validators: [Validators.required] }),
    semester: new FormControl('8', { validators: [Validators.required] }),
  });

  semesters: any[] = [
    { name: '1', code: '1' },
    { name: '2', code: '2' },
    { name: '3', code: '3' },
    { name: '4', code: '4' },
    { name: '5', code: '5' },
    { name: '6', code: '6' },
    { name: '7', code: '7' },
    { name: '8', code: '8' },
  ];

  visible: boolean = false;

  ngOnInit() {
    this.loader$ = this.store.select(selectAdminState);

    this.loader$.subscribe((data) => {
      console.log(data)
      const {addCourseloader,error} = data;
      this.loader = addCourseloader;
      this.isError = error;
      this.errorMessage=data.errorMessage

      if(!this.loader && !this.isError){
        this.examForm.reset();
      }
    });
  }

  showDialog() {
    this.visible = true;
  }

  onSubmit() {
    const { course_code, course_name, semester } = this.examForm.value;
    let obj = {
      name: course_name,
      code: course_code,
      semesters: semester.code,
    };
    console.log(obj);
    this.store.dispatch(addCourse(obj));
  }
}
