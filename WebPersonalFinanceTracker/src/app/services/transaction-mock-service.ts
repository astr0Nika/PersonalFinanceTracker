import { Injectable } from '@angular/core';
import { ITransactionService } from '../interfaces/ITransactionService';
import { Observable, of } from 'rxjs';
import { Transaction } from '../models/Transaction';
import data from './mock-data.json';
import { TransactionDescription } from '../models/TransactionDescription';

@Injectable({
  providedIn: 'root',
})
export class TransactionMockService implements ITransactionService {
  transactionList: Transaction[];

  constructor() {
    this.transactionList = data.transactions;
  }

  getTransactions(): Observable<Transaction[]> {
    return of(this.transactionList);
  }

  createTransaction(transaction: Transaction): void {
    this.transactionList.push(transaction);
  }

  deleteTransaction(id: number): void {
    this.transactionList.findIndex((t) => t.transactionId == id);
  }

  getTransactionDescriptions(): Observable<TransactionDescription[]> {
    return of(data.descriptions);
  }
}
