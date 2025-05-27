import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionAPIService } from '../services/transaction-api-service';
import { TransactionMockService } from '../services/transaction-mock-service';
import { IDateTime, ITransaction } from '../interfaces/transaction';

@Component({
  selector: 'app-transaction-table',
  imports: [CommonModule],
  templateUrl: './transaction-table.component.html',
  styleUrl: './transaction-table.component.css',
})
export class TransactionTableComponent {
  transactionService = inject(TransactionAPIService);
  // transactionService = inject(TransactionMockService);

  transactions: ITransaction[] = [];

  constructor() {
    this.transactionService
      .getTransactions()
      .subscribe((data) => (this.transactions = data));
  }
}
