import { Observable } from 'rxjs';
import { Transaction } from '../models/Transaction';
import { TransactionDescription } from '../models/TransactionDescription';
import { DateTime } from '../models/DateTime';

export interface ITransactionService {
  getTransactions(): Observable<Transaction[]>;

  createTransaction(
    title: string,
    price: number,
    isIncome: boolean,
    transactionDescriptionId: number | null,
    transactionDate: DateTime | null
  ): void;

  getTransactionDescriptions(): Observable<TransactionDescription[]>;
}
