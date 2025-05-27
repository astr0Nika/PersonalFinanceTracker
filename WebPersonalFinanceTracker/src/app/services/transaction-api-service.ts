import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ITransactionService } from '../interfaces/transaction-service';
import { ITransaction } from '../interfaces/transaction';

@Injectable({
  providedIn: 'root',
})
export class TransactionAPIService implements ITransactionService {
  private readonly apiUrl = 'http://localhost:5299/api';
  private http = inject(HttpClient);

  getTransactions() {
    return this.http.get<ITransaction[]>(
      `${this.apiUrl}/Transaction/GetTransactionList`
    );
  }

  createTransaction(transaction: ITransaction): void {
    throw new Error('Method not implemented.');
  }
}
