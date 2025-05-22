import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Transaction } from '../../modules/transaction';
import { TransactionService } from '../../services/transaction-service';

@Component({
  selector: 'app-transaction-table',
  imports: [CommonModule],
  templateUrl: './transaction-table.component.html',
  styleUrl: './transaction-table.component.css',
})
export class TransactionTableComponent {
  tService = inject(TransactionService);

  transactions: Transaction[] = [];

  constructor() {
    this.transactions = this.tService.getTransactions();
  }
}
