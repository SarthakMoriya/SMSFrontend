import { Component, inject, OnInit } from '@angular/core';
import { AddCourseComponent } from './add-course/add-course.component';
import { Store } from '@ngrx/store';
import { getCourses } from '../../../store/admin/admin.actions';
import { Observable, Subscription } from 'rxjs';
import { selectAdminState } from '../../../store/admin/admin.selector';
import { AddExamComponent } from './add-exam/add-exam.component';
import { AdminService } from '../../../services/pages/admin.service';
import { UnverifiedAccountsComponent } from "./unverified-accounts/unverified-accounts.component";

@Component({
  selector: 'app-admin',
  imports: [AddCourseComponent, AddExamComponent, UnverifiedAccountsComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent implements OnInit {
  private store = inject(Store);
  private srv = inject(AdminService);
  ngOnInit() {
    this.store.dispatch(getCourses());
    this.srv.getUnverifiedAccounts();
  }

  ngOnDestroy() {}
}
