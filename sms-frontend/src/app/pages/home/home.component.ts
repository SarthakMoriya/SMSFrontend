import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import dummycourses from '../../staticFiles/courses.json';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CourseRecords } from '../../models/coureRecords.model';
import { courseRecordsSelector } from '../../../store/courses/course.selector';
import { setCourseRecords } from '../../../store/courses/courses.action';
@Component({
  selector: 'app-home',
  imports: [SidebarComponent, MultiSelectModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  courses: any = [];
  course: any = [];
  courseRecords$: Observable<CourseRecords> | undefined;
  courseRecords: CourseRecords | undefined;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.courses = dummycourses;

    this.courseRecords$ = this.store.select(courseRecordsSelector);

    this.courseRecords$.subscribe((data) => {
      console.log(data);
    });

    this.store.dispatch(setCourseRecords({ courseCode: 'bsccs' }));
  }
  onVariableChange(event: any) {
    console.log(event);
  }
}
