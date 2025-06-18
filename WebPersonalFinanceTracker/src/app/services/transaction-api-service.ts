import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ITransactionService } from '../interfaces/ITransactionService';
import { Transaction } from '../models/Transaction';
import { Observable } from 'rxjs';
import { TransactionDescription } from '../models/TransactionDescription';
import { DateTime } from '../models/DateTime';

@Injectable({
  providedIn: 'root',
})
export class TransactionAPIService implements ITransactionService {
  private readonly apiUrl = 'http://localhost:5299/api';
  private http = inject(HttpClient);

  getTransactions() {
    return this.http.get<Transaction[]>(`${this.apiUrl}/Transactions/GetList`);
  }

  createTransaction(
    title: string,
    price: number,
    isIncome: boolean,
    transactionDescriptionId: number | null,
    transactionDate: DateTime | null
  ): void {
    this.http.post(`${this.apiUrl}/Transactions/Create`, {
      params: {
        title: title,
        price: price,
        isIncoming: isIncome,
        TransactionDescriptionId: transactionDescriptionId,
        datetime: transactionDate,
      },
    });
  }

  getTransactionDescriptions(): Observable<TransactionDescription[]> {
    return this.http.get<TransactionDescription[]>(
      `${this.apiUrl}/TransactionDescriptions/GetList`
    );
  }
}
