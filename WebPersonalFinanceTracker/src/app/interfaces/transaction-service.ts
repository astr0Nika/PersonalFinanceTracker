import { Observable } from 'rxjs';
import { ITransaction } from './transaction';

export interface ITransactionService {
  getTransactions(): Observable<ITransaction[]>;

  createTransaction(transaction: ITransaction): void;
}
