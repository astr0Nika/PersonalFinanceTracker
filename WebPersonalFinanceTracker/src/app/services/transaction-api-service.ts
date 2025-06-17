import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ITransactionService } from '../interfaces/ITransactionService';
import { Transaction } from '../models/Transaction';
import { Observable } from 'rxjs';
import { TransactionDescription } from '../models/TransactionDescription';

@Injectable({
  providedIn: 'root',
})
export class TransactionAPIService implements ITransactionService {
  private readonly apiUrl = 'http://localhost:5299/api';
  private http = inject(HttpClient);

  getTransactions() {
    return this.http.get<Transaction[]>(`${this.apiUrl}/Transactions/GetList`);
  }

  createTransaction(transaction: Transaction): void {
    throw new Error('Method not implemented.');
  }

  getTransactionDescriptions(): Observable<TransactionDescription[]> {
    throw new Error('Method not implemented.');
  }
}
