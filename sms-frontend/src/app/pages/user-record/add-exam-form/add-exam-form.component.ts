import { Component, input } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
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

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-add-exam-form',
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
  ],
  templateUrl: './add-exam-form.component.html',
  styleUrl: './add-exam-form.component.scss',
})
export class AddExamFormComponent {
  examForm: FormGroup = new FormGroup({
    examName: new FormControl('', { validators: [Validators.required] }),
    totalMarks: new FormControl('', { validators: [Validators.required] }),
    obtMarks: new FormControl('', { validators: [Validators.required] }),
    semester: new FormControl('Semester-1', {
      validators: [Validators.required],
    }),
    examType: new FormControl('Mid-Term', {
      validators: [Validators.required],
    }),
  });
  selectedSemester = 'Semester-1';
  visible: boolean = true;

  value1: string | undefined;

  value2: string | undefined;

  value3: string | undefined;

  courses: any[] = [
    { name: 'Semester-1', code: 's1' },
    { name: 'Semester-2', code: 's2' },
    { name: 'Semester-3', code: 's3' },
    { name: 'Semester-4', code: 's4' },
    { name: 'Semester-5', code: 's5' },
    { name: 'Semester-6', code: 's6' },
    { name: 'Semester-7', code: 's7' },
    { name: 'Semester-8', code: 's8' },
  ];

  examSessions = [
    { name: 'Mid-Term', code: 'mt' },
    { name: 'Final-Term', code: 'ft' },
  ];

  showDialog() {
    this.visible = true;
  }

  onSubmit() {
    console.log(this.examForm.value);
    let obj = {
      ...this.examForm.value,
      semester: this.examForm.value.semester.code,
      examType: this.examForm.value.examType.code,
    };
    console.log(obj);
  }
}
