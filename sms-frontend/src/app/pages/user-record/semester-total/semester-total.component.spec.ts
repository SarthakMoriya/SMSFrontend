import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterTotalComponent } from './semester-total.component';

describe('SemesterTotalComponent', () => {
  let component: SemesterTotalComponent;
  let fixture: ComponentFixture<SemesterTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemesterTotalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemesterTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
