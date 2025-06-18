import { Component, inject } from '@angular/core';
import { TransactionDescription } from '../models/TransactionDescription';
import { TransactionMockService } from '../services/transaction-mock-service';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Transaction } from '../models/Transaction';

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
    title: new FormControl('', [Validators.required, Validators.minLength(2)]),
    price: new FormControl(0, [Validators.required, Validators.min(0.01)]),
    income: new FormControl(false),
    description: new FormControl(''),
  });

  constructor() {
    this.transactionService
      .getTransactionDescriptions()
      .subscribe((data) => (this.descriptionList = data));
  }

  onSubmit() {
    if (this.transactionForm.valid) {
      // create new account
      const createValue = this.transactionForm.value;

      let createTransaction = new Transaction(
        createValue.title!,
        createValue.price!,
        createValue.income!,
        createValue.description!
      );

      this.transactionService.createTransaction(createTransaction);

      // reset form
      this.transactionForm = new FormGroup({
        title: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
        ]),
        price: new FormControl(0, [Validators.required, Validators.min(0.01)]),
        income: new FormControl(false),
        description: new FormControl('', [Validators.required]),
      });
    }
  }
}
