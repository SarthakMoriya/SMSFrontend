import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedAccountsComponent } from './verified-accounts.component';

describe('VerifiedAccountsComponent', () => {
  let component: VerifiedAccountsComponent;
  let fixture: ComponentFixture<VerifiedAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifiedAccountsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifiedAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
