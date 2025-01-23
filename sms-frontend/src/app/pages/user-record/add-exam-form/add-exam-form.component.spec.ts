import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExamFormComponent } from './add-exam-form.component';

describe('AddExamFormComponent', () => {
  let component: AddExamFormComponent;
  let fixture: ComponentFixture<AddExamFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddExamFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExamFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
