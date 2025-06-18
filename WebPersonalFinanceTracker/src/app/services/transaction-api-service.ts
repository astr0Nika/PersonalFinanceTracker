import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ITransactionService } from '../interfaces/ITransactionService';
import { Transaction } from '../models/Transaction';
import { Observable } from 'rxjs';
import { TransactionDescription } from '../models/TransactionDescription';
import { DateTimeView } from '../models/DateTimeView';

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
    transactionDate: DateTimeView | null
  ): void {
    const body = {
      Title: title,
      Price: price,
      IsIncome: isIncome,
      TransactionDescriptionId: transactionDescriptionId,
      TransactionDate: transactionDate
        ? {
            Year: transactionDate.year,
            Month: transactionDate.month,
            Day: transactionDate.day,
            Hour: transactionDate.hour,
            Minute: transactionDate.minute,
          }
        : null,
    };

    this.http
      .post(`${this.apiUrl}/Transactions/Create`, body)
      .subscribe((response) => console.log(response));
  }

  getTransactionDescriptions(): Observable<TransactionDescription[]> {
    return this.http.get<TransactionDescription[]>(
      `${this.apiUrl}/TransactionDescriptions/GetList`
    );
  }
}
