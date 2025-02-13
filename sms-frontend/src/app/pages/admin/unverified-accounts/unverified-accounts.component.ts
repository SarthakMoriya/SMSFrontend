import { Component, inject, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/pages/admin.service';
import { TableModule } from 'primeng/table';
import { CommonModule, DatePipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Response } from '../../../models/global.model';

@Component({
  selector: 'app-unverified-accounts',
  imports: [TableModule, CommonModule, ButtonModule, DatePipe],
  templateUrl: './unverified-accounts.component.html',
  styleUrl: './unverified-accounts.component.scss',
})
export class UnverifiedAccountsComponent implements OnInit {
  private srv = inject(AdminService);

  first = 0;
  rows = 10;
  accounts: any = [];
  ngOnInit() {
    this.srv.unverifiedAcountsObv.subscribe((data) => {
      console.log(data);
      this.accounts = data;
    });
  }
  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  pageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  isLastPage(): boolean {
    return this.accounts
      ? this.first + this.rows >= this.accounts.length
      : true;
  }

  isFirstPage(): boolean {
    return this.accounts ? this.first === 0 : true;
  }

  approveAcc(id: number) {
    console.log(id);
    this.srv.updateAccountStatus(id, '1').subscribe((data: Response) => {
      if (data.code == 200 && data.status == 'success') {
        this.accounts = this.accounts.filter(
          (acc: { id: number }) => acc.id != id
        );
      }
    });
  }
  rejectAcc(id: number) {
    console.log(id);
    this.srv.updateAccountStatus(id, '3').subscribe((data: Response) => {
      if (data.code == 200 && data.status == 'success') {
        this.accounts = this.accounts.filter(
          (acc: { id: number }) => acc.id != id
        );
      }
    });
  }
}
