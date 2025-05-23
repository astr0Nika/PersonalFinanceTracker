import { Injectable } from '@angular/core';
import { ITransactionService } from '../interfaces/transaction-service';
import { Transaction } from '../interfaces/transaction';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionMockService implements ITransactionService {
  getTransactions() {
    return of([
      {
        title: 'Kitchen',
        transactionDate: '2024-08-01 20:18:39',
        price: 29.99,
        transactionDescriptionName: 'Purple',
        isIncome: true,
      },
      {
        title: 'Food - Desserts',
        transactionDate: '2024-08-25 16:22:06',
        price: 2.99,
        transactionDescriptionName: 'Purple',
        isIncome: true,
      },
      {
        title: 'Fitness',
        transactionDate: '2024-12-17 04:02:02',
        price: 34.99,
        transactionDescriptionName: 'Red',
        isIncome: true,
      },
      {
        title: 'Food - Seafood',
        transactionDate: '2024-07-06 07:05:18',
        price: 8.99,
        transactionDescriptionName: 'Green',
        isIncome: true,
      },
      {
        title: 'Food - Baking Goods',
        transactionDate: '2024-04-25 16:21:01',
        price: 3.99,
        transactionDescriptionName: 'Red',
        isIncome: false,
      },
      {
        title: 'Food - Frozen Desserts',
        transactionDate: '2025-05-08 01:33:00',
        price: 4.99,
        transactionDescriptionName: null,
        isIncome: false,
      },
      {
        title: 'Food - Pasta',
        transactionDate: '2025-03-12 03:15:45',
        price: 1.89,
        transactionDescriptionName: 'Green',
        isIncome: true,
      },
      {
        title: 'Food - Frozen Foods',
        transactionDate: '2025-04-19 09:55:26',
        price: 2.99,
        transactionDescriptionName: 'Green',
        isIncome: false,
      },
      {
        title: 'Health',
        transactionDate: '2024-05-28 07:49:27',
        price: 5.99,
        transactionDescriptionName: 'Indigo',
        isIncome: true,
      },
      {
        title: 'Outdoor',
        transactionDate: '2025-03-25 17:04:59',
        price: 29.99,
        transactionDescriptionName: 'Pink',
        isIncome: true,
      },
      {
        title: 'Health',
        transactionDate: '2024-08-31 23:27:30',
        price: 49.99,
        transactionDescriptionName: 'Green',
        isIncome: false,
      },
      {
        title: 'Food - Dairy',
        transactionDate: '2025-05-04 17:46:27',
        price: 2.99,
        transactionDescriptionName: 'Pink',
        isIncome: true,
      },
      {
        title: 'Toys',
        transactionDate: '2024-09-05 03:14:47',
        price: 19.99,
        transactionDescriptionName: null,
        isIncome: false,
      },
      {
        title: 'Automotive',
        transactionDate: '2024-12-26 18:27:13',
        price: 59.99,
        transactionDescriptionName: 'Purple',
        isIncome: true,
      },
      {
        title: 'Home',
        transactionDate: '2024-10-15 09:48:59',
        price: 16.99,
        transactionDescriptionName: 'Orange',
        isIncome: false,
      },
      {
        title: 'Food - Soups',
        transactionDate: '2024-07-25 19:43:43',
        price: 2.99,
        transactionDescriptionName: 'Pink',
        isIncome: true,
      },
      {
        title: 'Food - Dairy',
        transactionDate: '2024-07-07 01:55:46',
        price: 3.49,
        transactionDescriptionName: null,
        isIncome: false,
      },
      {
        title: 'Food - Snacks',
        transactionDate: '2024-12-26 18:46:45',
        price: 3.99,
        transactionDescriptionName: 'Pink',
        isIncome: false,
      },
      {
        title: 'Garden',
        transactionDate: '2024-12-31 10:17:16',
        price: 24.99,
        transactionDescriptionName: 'Indigo',
        isIncome: false,
      },
      {
        title: 'Smart Home',
        transactionDate: '2025-03-16 23:48:29',
        price: 99.99,
        transactionDescriptionName: 'Indigo',
        isIncome: false,
      },
    ]);
  }
  createTransaction(transaction: Transaction): void {
    throw new Error('Method not implemented.');
  }
}
