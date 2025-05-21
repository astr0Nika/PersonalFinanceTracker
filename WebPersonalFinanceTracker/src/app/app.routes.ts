import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { TransactionsComponent } from './transactions/transactions.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home Page' },
  {
    path: 'transactions',
    component: TransactionsComponent,
    title: 'Transactions Page',
  },
  { path: 'test', component: TestComponent, title: 'Test Page' },
];
