import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  signupForm = new FormGroup({
    username: new FormControl('', {
      validators: [Validators.required],
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(5)],
    }),
    passcode: new FormControl('', {
      validators: [Validators.required, Validators.minLength(4)],
    }),
  });

  onSumbit() {
    console.log(this.signupForm.value);
  }

  get passwordInput() {
    return this.signupForm.get('password');
  }
  get usernameInput() {
    return this.signupForm.get('username');
  }
  get emailInput() {
    return this.signupForm.get('email');
  }
  get passcodeInput() {
    return this.signupForm.get('passcode');
  }
}
