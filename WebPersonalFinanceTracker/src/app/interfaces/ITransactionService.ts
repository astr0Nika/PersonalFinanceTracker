import { Observable } from 'rxjs';
import { Transaction } from '../models/Transaction';
import { TransactionDescription } from '../models/TransactionDescription';
import { DateTimeView } from '../models/DateTimeView';

export interface ITransactionService {
  getTransactions(): Observable<Transaction[]>;

  createTransaction(
    title: string,
    price: number,
    isIncome: boolean,
    transactionDescriptionId: number | null,
    transactionDate: DateTimeView | null
  ): void;

  getTransactionDescriptions(): Observable<TransactionDescription[]>;
}
