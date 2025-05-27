import { Injectable } from '@angular/core';
import { ITransactionService } from '../interfaces/transaction-service';
import { Observable, of } from 'rxjs';
import { ITransaction } from '../interfaces/transaction';

@Injectable({
  providedIn: 'root',
})
export class TransactionMockService implements ITransactionService {
  transactionList: ITransaction[];

  constructor() {
    this.transactionList = []; //this.fillList();
  }

  // TODO: fix this shit
  // private fillList(): Transaction[] {
  //   return [
  //     {
  //       transactionId: 0,
  //       title: 'Kitchen',
  //       transactionDate: new Date('2024-08-01 20:18:39'),
  //       price: 29.99,
  //       transactionDescriptionName: 'Purple',
  //       isIncome: true,
  //     },
  //     {
  //       transactionId: 1,
  //       title: 'Food - Desserts',
  //       transactionDate: new Date('2024-08-25 16:22:06'),
  //       price: 2.99,
  //       transactionDescriptionName: 'Purple',
  //       isIncome: true,
  //     },
  //     {
  //       transactionId: 2,
  //       title: 'Fitness',
  //       transactionDate: new Date('2024-12-17 04:02:02'),
  //       price: 34.99,
  //       transactionDescriptionName: 'Red',
  //       isIncome: true,
  //     },
  //     {
  //       transactionId: 3,
  //       title: 'Food - Seafood',
  //       transactionDate: new Date('2024-07-06 07:05:18'),
  //       price: 8.99,
  //       transactionDescriptionName: 'Green',
  //       isIncome: true,
  //     },
  //     {
  //       transactionId: 4,
  //       title: 'Food - Baking Goods',
  //       transactionDate: new Date('2024-04-25 16:21:01'),
  //       price: 3.99,
  //       transactionDescriptionName: 'Red',
  //       isIncome: false,
  //     },
  //     {
  //       transactionId: 5,
  //       title: 'Food - Frozen Desserts',
  //       transactionDate: new Date('2025-05-08 01:33:00'),
  //       price: 4.99,
  //       transactionDescriptionName: null,
  //       isIncome: false,
  //     },
  //     {
  //       transactionId: 6,
  //       title: 'Food - Pasta',
  //       transactionDate: new Date('2025-03-12 03:15:45'),
  //       price: 1.89,
  //       transactionDescriptionName: 'Green',
  //       isIncome: true,
  //     },
  //     {
  //       transactionId: 8,
  //       title: 'Food - Frozen Foods',
  //       transactionDate: new Date('2025-04-19 09:55:26'),
  //       price: 2.99,
  //       transactionDescriptionName: 'Green',
  //       isIncome: false,
  //     },
  //     {
  //       transactionId: 9,
  //       title: 'Health',
  //       transactionDate: new Date('2024-05-28 07:49:27'),
  //       price: 5.99,
  //       transactionDescriptionName: 'Indigo',
  //       isIncome: true,
  //     },
  //     {
  //       transactionId: 10,
  //       title: 'Outdoor',
  //       transactionDate: new Date('2025-03-25 17:04:59'),
  //       price: 29.99,
  //       transactionDescriptionName: 'Pink',
  //       isIncome: true,
  //     },
  //     {
  //       transactionId: 12,
  //       title: 'Health',
  //       transactionDate: new Date('2024-08-31 23:27:30'),
  //       price: 49.99,
  //       transactionDescriptionName: 'Green',
  //       isIncome: false,
  //     },
  //     {
  //       transactionId: 13,
  //       title: 'Food - Dairy',
  //       transactionDate: new Date('2025-05-04 17:46:27'),
  //       price: 2.99,
  //       transactionDescriptionName: 'Pink',
  //       isIncome: true,
  //     },
  //     {
  //       transactionId: 14,
  //       title: 'Toys',
  //       transactionDate: new Date('2024-09-05 03:14:47'),
  //       price: 19.99,
  //       transactionDescriptionName: null,
  //       isIncome: false,
  //     },
  //     {
  //       transactionId: 15,
  //       title: 'Automotive',
  //       transactionDate: new Date('2024-12-26 18:27:13'),
  //       price: 59.99,
  //       transactionDescriptionName: 'Purple',
  //       isIncome: true,
  //     },
  //     {
  //       transactionId: 16,
  //       title: 'Home',
  //       transactionDate: new Date('2024-10-15 09:48:59'),
  //       price: 16.99,
  //       transactionDescriptionName: 'Orange',
  //       isIncome: false,
  //     },
  //     {
  //       transactionId: 17,
  //       title: 'Food - Soups',
  //       transactionDate: new Date('2024-07-25 19:43:43'),
  //       price: 2.99,
  //       transactionDescriptionName: 'Pink',
  //       isIncome: true,
  //     },
  //     {
  //       transactionId: 18,
  //       title: 'Food - Dairy',
  //       transactionDate: new Date('2024-07-07 01:55:46'),
  //       price: 3.49,
  //       transactionDescriptionName: null,
  //       isIncome: false,
  //     },
  //     {
  //       transactionId: 19,
  //       title: 'Food - Snacks',
  //       transactionDate: new Date('2024-12-26 18:46:45'),
  //       price: 3.99,
  //       transactionDescriptionName: 'Pink',
  //       isIncome: false,
  //     },
  //     {
  //       transactionId: 20,
  //       title: 'Garden',
  //       transactionDate: new Date('2024-12-31 10:17:1'),
  //       price: 24.99,
  //       transactionDescriptionName: 'Indigo',
  //       isIncome: false,
  //     },
  //     {
  //       transactionId: 21,
  //       title: 'Smart Home',
  //       transactionDate: new Date('2025-03-16 23:48:29'),
  //       price: 99.99,
  //       transactionDescriptionName: 'Indigo',
  //       isIncome: false,
  //     },
  //     {
  //       transactionId: 22,
  //       title: 'Corn Kernels - Frozen',
  //       transactionDate: new Date('2024-09-03 12:41:10'),
  //       price: 13.14,
  //       transactionDescriptionName: 'Red',
  //       isIncome: true,
  //     },
  //     {
  //       transactionId: 23,
  //       title: 'Granadilla',
  //       transactionDate: new Date('2024-05-23 21:03:19'),
  //       price: 7.9,
  //       transactionDescriptionName: 'Blue',
  //       isIncome: false,
  //     },
  //     {
  //       transactionId: 25,
  //       title: 'Sour Puss Sour Apple',
  //       transactionDate: new Date('2025-01-17 10:30:52'),
  //       price: 7.9,
  //       transactionDescriptionName: 'Indigo',
  //       isIncome: true,
  //     },
  //     {
  //       transactionId: 26,
  //       title: 'Pie Pecan',
  //       transactionDate: new Date('2024-11-07 05:10:41'),
  //       price: 4.05,
  //       transactionDescriptionName: null,
  //       isIncome: false,
  //     },
  //     {
  //       transactionId: 27,
  //       title: 'Bulgar',
  //       transactionDate: new Date('2024-04-28 10:24:44'),
  //       price: 7.9,
  //       transactionDescriptionName: null,
  //       isIncome: false,
  //     },
  //     {
  //       transactionId: 28,
  //       title: 'Chives - Fresh',
  //       transactionDate: new Date('2025-03-13 19:11:17'),
  //       price: 7.9,
  //       transactionDescriptionName: null,
  //       isIncome: true,
  //     },
  //     {
  //       transactionId: 30,
  //       title: 'Cake - Night And Day Chocolate',
  //       transactionDate: new Date('2025-03-17 16:55:23'),
  //       price: 7.9,
  //       transactionDescriptionName: 'Pink',
  //       isIncome: true,
  //     },
  //     {
  //       transactionId: 31,
  //       title: 'Salt - Celery',
  //       transactionDate: new Date('2024-10-02 15:43:27'),
  //       price: 7.9,
  //       transactionDescriptionName: null,
  //       isIncome: true,
  //     },
  //     {
  //       transactionId: 32,
  //       title: 'Beef - Kinne, Whole',
  //       transactionDate: new Date('2024-06-22 15:23:17'),
  //       price: 13.14,
  //       transactionDescriptionName: null,
  //       isIncome: true,
  //     },
  //     {
  //       transactionId: 33,
  //       title: 'Smoked Paprika',
  //       transactionDate: new Date('2024-05-19 02:41:57'),
  //       price: 13.14,
  //       transactionDescriptionName: 'Purple',
  //       isIncome: false,
  //     },
  //     {
  //       transactionId: 34,
  //       title: 'Energy Drink - Franks Pineapple',
  //       transactionDate: new Date('2024-12-11 16:27:15'),
  //       price: 52.89,
  //       transactionDescriptionName: 'Red',
  //       isIncome: true,
  //     },
  //   ];
  // }

  getTransactions(): Observable<ITransaction[]> {
    return of(this.transactionList);
  }

  createTransaction(transaction: ITransaction): void {
    throw new Error('Method not implemented.');
  }

  deleteTransaction(id: number): void {
    this.transactionList.findIndex((t) => t.transactionId == id);
  }
}
