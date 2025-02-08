import { Component, inject, OnInit } from '@angular/core';
import { AddCourseComponent } from './add-course/add-course.component';
import { Store } from '@ngrx/store';
import { getCourses } from '../../../store/admin/admin.actions';
import { Observable, Subscription } from 'rxjs';
import { selectAdminState } from '../../../store/admin/admin.selector';

@Component({
  selector: 'app-admin',
  imports: [AddCourseComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent implements OnInit {
  private store = inject(Store);
  courses$: Observable<any>=this.store.select(selectAdminState);
  courses = [];
  coursesSub = new Subscription();

  ngOnInit() {
    this.store.dispatch(getCourses());

    this.coursesSub = this.courses$?.subscribe((courses) => {
      console.log(courses);
      this.courses = courses.courses;
    });
  }

  ngOnDestroy(){
    this.coursesSub.unsubscribe();
  }
}
