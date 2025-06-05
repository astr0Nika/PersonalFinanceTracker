import { Observable } from 'rxjs';
import { Transaction } from '../models/Transaction';

export interface ITransactionService {
  getTransactions(): Observable<Transaction[]>;

  createTransaction(transaction: Transaction): void;
}
