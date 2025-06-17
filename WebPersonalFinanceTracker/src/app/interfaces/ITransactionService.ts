import { Observable } from 'rxjs';
import { Transaction } from '../models/Transaction';
import { TransactionDescription } from '../models/TransactionDescription';

export interface ITransactionService {
  getTransactions(): Observable<Transaction[]>;

  createTransaction(transaction: Transaction): void;

  getTransactionDescriptions(): Observable<TransactionDescription[]>;
}
