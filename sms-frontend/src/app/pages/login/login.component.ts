import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from '../../../store/auth/auth.actions';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Record, Records } from '../../models/record.model';
import { RecordsSelector } from '../../../store/record/record.selector';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('admin@gmail.com', {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('admin', {
      validators: [Validators.required, Validators.minLength(2)],
    }),
  });
  records$: Observable<Record[]> | undefined;
  records: Record[] | undefined;

  constructor(private store: Store) {}

  onSubmit() {
    const { email, password } = this.form.value;
    console.log(email, password);
    const username = email ?? ''; // Default to an empty string if email is null/undefined
    const pass = password ?? ''; // Default to an empty string if password is null/undefined
    console.log(username, pass);
    this.store.dispatch(login({ username, password: pass }));
  }

  ngOnInit() {
    this.records$ = this.store.select(RecordsSelector);

    this.records$.subscribe((recs) => {
      console.log(recs)
      this.records = recs;
    });
  }

  get passwordInput() {
    return this.form.get('password');
  }
  get emailInput() {
    return this.form.get('email');
  }
}
