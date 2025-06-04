import { Injectable } from '@angular/core';
import { ITransactionService } from '../interfaces/transaction-service';
import { Observable, of } from 'rxjs';
import { Transaction } from '../interfaces/transaction';
import mock from './mock-data.json';

@Injectable({
  providedIn: 'root',
})
export class TransactionMockService implements ITransactionService {
  transactionList: Transaction[];

  constructor() {
    this.transactionList = mock.data;
  }

  getTransactions(): Observable<Transaction[]> {
    return of(this.transactionList);
  }

  createTransaction(transaction: Transaction): void {
    throw new Error('Method not implemented.');
  }

  deleteTransaction(id: number): void {
    this.transactionList.findIndex((t) => t.transactionId == id);
  }
}
