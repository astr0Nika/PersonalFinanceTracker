import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ITransactionService } from '../interfaces/transaction-service';
import { Transaction } from '../interfaces/transaction';

@Injectable({
  providedIn: 'root',
})
export class TransactionAPIService implements ITransactionService {
  private readonly apiUrl = 'http://localhost:5299/api';
  private http = inject(HttpClient);

  getTransactions() {
    return this.http.get<Transaction[]>(
      `${this.apiUrl}/Transaction/GetTransactionList`
    );
  }

  createTransaction(transaction: Transaction): void {
    throw new Error('Method not implemented.');
  }
}
