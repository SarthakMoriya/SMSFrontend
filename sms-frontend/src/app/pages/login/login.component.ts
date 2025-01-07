import { CommonModule } from '@angular/common';
import { Component, OnInit, NgModule } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from '../../../store/auth/auth.actions';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(2)],
    }),
  });

  constructor(private store: Store) {}

  onSubmit() {
    const { email, password } = this.form.value;
    console.log(email, password);
    const username = email ?? ''; // Default to an empty string if email is null/undefined
    const pass = password ?? ''; // Default to an empty string if password is null/undefined
    console.log(username, pass);
    this.store.dispatch(login({ username, password: pass }));
  }

  ngOnInit(): void {
    console.log(this.form);
  }

  get passwordInput() {
    return this.form.get('password');
  }
  get emailInput() {
    return this.form.get('email');
  }
}
