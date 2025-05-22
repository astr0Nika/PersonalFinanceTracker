import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TransactionsComponent } from './transactions/transactions.component';

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
];
