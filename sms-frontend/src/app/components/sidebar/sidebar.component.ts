import { Component, inject } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { logout } from '../../../store/auth/auth.actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  standalone: true,
  imports: [DrawerModule, ButtonModule, RouterLink],
})
export class SidebarComponent {
  visible1: boolean = false;
  router = inject(Router);
  store = inject(Store);
  logout() {
    this.store.dispatch(logout());
    this.router.navigate(['login']);
  }
}
