import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUserToken } from '../store/auth/auth.selector';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sms-frontend';
  token$: Observable<string> | undefined;
  constructor(private store: Store) {}

  ngOnInit() {
    this.token$ = this.store.select(selectUserToken);
  }
}
