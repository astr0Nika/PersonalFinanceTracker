import { Observable } from 'rxjs';
import { Transaction } from './transaction';

export interface ITransactionService {
  getTransactions(): Observable<Transaction[]>;

  createTransaction(transaction: Transaction): void;
}
