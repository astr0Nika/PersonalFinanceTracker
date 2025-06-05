import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { CreateTransaction } from './create-transaction/create-transaction';
import { ShapeBuilder } from './shape-builder/shape-builder';

export const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'transactions',
    component: TransactionsComponent,
    title: 'Transactions Page',
  },
  {
    path: 'transaction/create',
    component: CreateTransaction,
    title: 'Create Transaction',
  },
  {
    path: 'editor',
    component: ShapeBuilder,
    title: 'Shape Editor',
  },
];
