import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import dummycourses from '../../staticFiles/courses.json';
@Component({
  selector: 'app-home',
  imports: [SidebarComponent, MultiSelectModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  courses: any = [];
  course: any = [];

  ngOnInit(): void {
    this.courses = dummycourses;
    console.log(this.courses);
  }
  onVariableChange(event: any) {
    console.log(event)
  }
}
