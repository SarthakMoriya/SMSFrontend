import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnverifiedAccountsComponent } from './unverified-accounts.component';

describe('UnverifiedAccountsComponent', () => {
  let component: UnverifiedAccountsComponent;
  let fixture: ComponentFixture<UnverifiedAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnverifiedAccountsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnverifiedAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
