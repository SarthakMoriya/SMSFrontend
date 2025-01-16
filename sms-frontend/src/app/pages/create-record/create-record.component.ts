import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUserDetails } from '../../../store/auth/auth.selector';
import { UserDetailsState } from '../../models/user.model';
import { createRecord } from '../../../store/record/record.actions';
import { Record } from '../../models/record.model';

@Component({
  selector: 'app-create-record',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-record.component.html',
  styleUrl: './create-record.component.scss',
})
export class CreateRecordComponent implements OnInit {
  user$: Observable<UserDetailsState> | undefined;
  user: UserDetailsState | undefined;
  constructor(private store: Store) {}

  ngOnInit() {
    this.user$ = this.store.select(selectUserDetails);
    console.log(this.user$);

    this.user$.subscribe((userDetails) => {
      console.log(userDetails);
      this.user = userDetails;
    });
  }

  form = new FormGroup({
    name: new FormControl('Sarthak', {
      validators: [Validators.required, Validators.minLength(2)],
    }),
    dateEnrolled: new FormControl('2025-01-01', {
      validators: [Validators.required],
    }),
    course: new FormControl('bsccs', {
      validators: [Validators.required],
    }),
    rollNo: new FormControl('1234', {
      validators: [Validators.required, Validators.minLength(4)],
    }),
    universityRollNo: new FormControl('', {
      validators: [Validators.required, Validators.minLength(4)],
    }),
    passcode: new FormControl('1234', {
      validators: [Validators.required, Validators.minLength(4)],
    }),
  });

  get nameInput() {
    return this.form.get('name');
  }
  get courseInput() {
    return this.form.get('course');
  }
  get dateInput() {
    return this.form.get('dateEnrolled');
  }
  get rollNoInput() {
    return this.form.get('rollNo');
  }
  get uniRollNoInput() {
    return this.form.get('universityRollNo');
  }

  get passcodeInput() {
    return this.form.get('passcode');
  }

  onSubmit() {
    const { passcode, universityRollNo, rollNo, dateEnrolled, course, name } =
      this.form.value;
      console.log(passcode,this.user?.passcode)
    if (!passcode || passcode != this.user?.passcode) {
      alert('Passcode does not match!');
      return;
    }
    let body: Record = {
      stu_name: name,
      date_enrolled: dateEnrolled,
      teacher_id: parseInt(this.user.id),
      course,
      rollno:rollNo,
    };
    console.log(body)
    this.store.dispatch(createRecord({ record: body }));
  }
}
