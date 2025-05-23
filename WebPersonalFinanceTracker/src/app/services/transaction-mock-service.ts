import { Injectable } from '@angular/core';
import { ITransactionService } from '../interfaces/transaction-service';
import { Transaction } from '../interfaces/transaction';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionMockService implements ITransactionService {
  getTransactions(): Observable<Transaction[]> {
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
      {
        title: 'Corn Kernels - Frozen',
        transactionDate: '2024-09-03 12:41:10',
        price: 13.14,
        transactionDescriptionName: 'Red',
        isIncome: true,
      },
      {
        title: 'Grenadillo',
        transactionDate: '2024-05-23 21:03:19',
        price: 7.9,
        transactionDescriptionName: 'Blue',
        isIncome: false,
      },
      {
        title: 'Sour Puss Sour Apple',
        transactionDate: '2025-01-17 10:30:52',
        price: 7.9,
        transactionDescriptionName: 'Indigo',
        isIncome: true,
      },
      {
        title: 'Pie Pecan',
        transactionDate: '2024-11-07 05:10:41',
        price: 4.05,
        transactionDescriptionName: null,
        isIncome: false,
      },
      {
        title: 'Bulgar',
        transactionDate: '2024-04-28 10:24:44',
        price: 7.9,
        transactionDescriptionName: null,
        isIncome: false,
      },
      {
        title: 'Chives - Fresh',
        transactionDate: '2025-03-13 19:11:17',
        price: 7.9,
        transactionDescriptionName: null,
        isIncome: true,
      },
      {
        title: 'Cake - Night And Day Choclate',
        transactionDate: '2025-03-17 16:55:23',
        price: 7.9,
        transactionDescriptionName: 'Pink',
        isIncome: true,
      },
      {
        title: 'Salt - Celery',
        transactionDate: '2024-10-02 15:43:27',
        price: 7.9,
        transactionDescriptionName: null,
        isIncome: true,
      },
      {
        title: 'Beef - Kindney, Whole',
        transactionDate: '2024-06-22 15:23:17',
        price: 13.14,
        transactionDescriptionName: null,
        isIncome: true,
      },
      {
        title: 'Smoked Paprika',
        transactionDate: '2024-05-19 02:41:57',
        price: 13.14,
        transactionDescriptionName: 'Purple',
        isIncome: false,
      },
      {
        title: 'Energy Drink - Franks Pineapple',
        transactionDate: '2024-12-11 16:27:15',
        price: 52.89,
        transactionDescriptionName: 'Red',
        isIncome: true,
      },
    ]);
  }
  createTransaction(transaction: Transaction): void {
    throw new Error('Method not implemented.');
  }
}
