import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Transaction } from '../models/Transaction';
import { TransactionService } from '../interfaces/TransactionService';

@Component({
  selector: 'app-transaction-table',
  imports: [CommonModule],
  templateUrl: './transaction-table.component.html',
  styleUrl: './transaction-table.component.css',
})
export class TransactionTableComponent {
  transactionService = inject(TransactionService);

  transactions: Transaction[] = [];

  constructor() {
    this.transactionService
      .getTransactions()
      .subscribe((data) => (this.transactions = data));
  }
}
