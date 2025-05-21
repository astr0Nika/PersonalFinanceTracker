import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Transaction } from '../modules/transaction';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private http = inject(HttpClient);

  // TODO: not yet tested
  getTransactions(): Transaction[] {
    let transactionList: Transaction[] = [];
    this.http
      .get<Transaction[]>(
        'https://localhost:7149/api/Transaction/GetTransactions'
      )
      .subscribe((x) => (transactionList = x));

    return transactionList;
  }
}

// transaction
