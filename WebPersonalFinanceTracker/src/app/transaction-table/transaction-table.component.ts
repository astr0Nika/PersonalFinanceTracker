import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-table',
  imports: [CommonModule],
  templateUrl: './transaction-table.component.html',
  styleUrl: './transaction-table.component.css',
})
export class TransactionTableComponent {
  //TODO: get transactions from API
  transactions = [
    {
      id: 0,
      title: 'Lohn Mai',
      transactionDate: '',
      price: 1200,
      isIncome: true,
      transactionDescriptionName: 'Pay',
    },
    {
      id: 1,
      title: 'Benzin Honda',
      transactionDate: '',
      price: 11.24,
      isIncome: false,
      transactionDescriptionName: 'Car',
    },
    {
      id: 2,
      title: 'Spar',
      transactionDate: '',
      price: 64.7,
      isIncome: false,
      transactionDescriptionName: 'Grocery',
    },
    {
      id: 3,
      title: 'FRK Mitglied',
      transactionDate: '',
      price: 40,
      isIncome: false,
      transactionDescriptionName: 'Hobby',
    },
  ];
}
