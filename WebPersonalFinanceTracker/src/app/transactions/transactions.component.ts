import { Component } from '@angular/core';
import { TransactionTableComponent } from '../transaction-table/transaction-table.component';

@Component({
  selector: 'app-transactions',
  imports: [TransactionTableComponent],
  templateUrl: './transactions.component.html',
})
export class TransactionsComponent {}
