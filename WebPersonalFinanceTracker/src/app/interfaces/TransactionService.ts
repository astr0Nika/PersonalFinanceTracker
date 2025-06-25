import { Observable } from 'rxjs';
import { Transaction } from '../models/Transaction';
import { TransactionDescription } from '../models/TransactionDescription';
import { DateTimeView } from '../models/DateTimeView';

export abstract class TransactionService {
  public abstract getTransactions(): Observable<Transaction[]>;

  public abstract createTransaction(
    title: string,
    price: number,
    isIncome: boolean,
    transactionDescriptionId: number | null,
    transactionDate: DateTimeView | null
  ): void;

  public abstract getTransactionDescriptions(): Observable<
    TransactionDescription[]
  >;
}
