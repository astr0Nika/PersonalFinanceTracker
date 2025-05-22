import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionService } from '../services/transaction-service';

@Component({
  selector: 'app-transaction-table',
  imports: [CommonModule],
  templateUrl: './transaction-table.component.html',
  styleUrl: './transaction-table.component.css',
})
export class TransactionTableComponent {
  transactionService = inject(TransactionService);

  transactions: any = [];

  constructor() {
    this.transactionService.getTransactions().subscribe({
      next: (data) => {
        this.transactions = data;
      },
      error: (err) => {
        // TODO: show there was an error
        console.log(err);
      },
    });
  }
}
