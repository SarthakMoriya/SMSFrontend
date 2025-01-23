import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CreateRecordComponent } from './pages/create-record/create-record.component';
import { HomeComponent } from './pages/home/home.component';
import { UserRecordComponent } from './pages/user-record/user-record.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'create',
    component:CreateRecordComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'user/:id',
    component:UserRecordComponent
  }
];
