import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  imports: [AsyncPipe],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  counter$: Observable<number>;
  constructor(private store: Store<{ counter: number }>) {
    this.counter$ = this.store.select('counter');
  }
}
