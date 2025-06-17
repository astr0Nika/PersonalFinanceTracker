import { Component, inject } from '@angular/core';
import { TransactionDescription } from '../models/TransactionDescription';
import { TransactionMockService } from '../services/transaction-mock-service';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-transaction',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-transaction.html',
  styleUrl: './create-transaction.css',
})
export class CreateTransaction {
  // transactionService = inject(TransactionAPIService);
  transactionService = inject(TransactionMockService);
  descriptionList: TransactionDescription[] = [];

  transactionForm = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(0),
    income: new FormControl(false),
    description: new FormControl(''),
  });

  constructor() {
    this.transactionService
      .getTransactionDescriptions()
      .subscribe((data) => (this.descriptionList = data));
  }

  onSubmit() {
    console.warn(this.transactionForm.value);

    // TODO: create from service
    // const createTransaction = this.transactionForm.value;

    this.transactionForm = new FormGroup({
      title: new FormControl(''),
      price: new FormControl(0),
      income: new FormControl(false),
      description: new FormControl(''),
    });
  }
}
