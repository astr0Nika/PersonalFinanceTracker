import { Injectable } from '@angular/core';
import { ITransactionService } from '../interfaces/ITransactionService';
import { Observable, of } from 'rxjs';
import { Transaction } from '../models/Transaction';
import data from './mock-data.json';
import { TransactionDescription } from '../models/TransactionDescription';
import { DateTimeView } from '../models/DateTimeView';

@Injectable({
  providedIn: 'root',
})
export class TransactionMockService implements ITransactionService {
  descriptionList: TransactionDescription[];
  transactionList: Transaction[];

  constructor() {
    this.descriptionList = data.descriptions;
    this.transactionList = data.transactions.map(
      (x) =>
        new Transaction(
          x.transactionId,
          x.title,
          x.transactionDate,
          x.price,
          x.isIncome,
          this.descriptionList.find(
            (y) => y.transactionDescriptionId === x.transactionDescriptionId
          )?.title ?? null
        )
    );
  }

  createTransaction(
    title: string,
    price: number,
    isIncome: boolean,
    transactionDescriptionId: number | null,
    transactionDate: DateTimeView | null
  ): void {
    const firstNotUsedNumber = this.transactionList.length;
    const date = transactionDate ?? new DateTimeView(new Date());
    const descriptionName =
      this.descriptionList.find(
        (x) => x.transactionDescriptionId === transactionDescriptionId
      )?.title ?? null;

    this.transactionList.push(
      new Transaction(
        firstNotUsedNumber,
        title,
        date,
        price,
        isIncome,
        descriptionName
      )
    );
  }

  getTransactions(): Observable<Transaction[]> {
    return of(this.transactionList);
  }

  // deleteTransaction(id: number): void {
  //   this.transactionList.findIndex((t) => t.transactionId == id);
  // }

  getTransactionDescriptions(): Observable<TransactionDescription[]> {
    return of(data.descriptions);
  }
}
