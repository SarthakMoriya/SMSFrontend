import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    templateUrl: 'sidebar.component.html',
    standalone: true,
    imports: [DrawerModule, ButtonModule,RouterLink]
})
export class SidebarComponent {
    visible1: boolean = false;

   
}