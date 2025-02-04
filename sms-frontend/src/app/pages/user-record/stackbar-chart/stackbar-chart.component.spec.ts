import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackbarChartComponent } from './stackbar-chart.component';

describe('StackbarChartComponent', () => {
  let component: StackbarChartComponent;
  let fixture: ComponentFixture<StackbarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackbarChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StackbarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
