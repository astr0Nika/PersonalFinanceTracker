import { Component, inject } from '@angular/core';
import { TransactionDescription } from '../models/TransactionDescription';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DateTimeView } from '../models/DateTimeView';
import { TransactionService } from '../interfaces/TransactionService';

@Component({
  selector: 'app-create-transaction',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-transaction.html',
  styleUrl: './create-transaction.css',
})
export class CreateTransaction {
  transactionService = inject(TransactionService);

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
      const createValue = this.transactionForm.value;

      // TODO: get description id
      this.transactionService.createTransaction(
        createValue.title!,
        createValue.price!,
        createValue.income!,
        null,
        new DateTimeView(new Date())
      );

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
