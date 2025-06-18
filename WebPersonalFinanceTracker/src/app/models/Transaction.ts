import { DateTime } from './DateTime';

export class Transaction {
  constructor(
    transactionId: number,
    title: string,
    transactionDate: DateTime,
    price: number,
    isIncome: boolean,
    transactionDescriptionName: string | null
  ) {
    this.transactionId = transactionId;
    this.title = title;
    this.transactionDate = transactionDate;
    this.price = price;
    this.isIncome = isIncome;
    this.transactionDescriptionName = transactionDescriptionName;
  }

  transactionId: number;
  title: string;
  transactionDate: DateTime;
  price: number;
  isIncome: boolean;
  transactionDescriptionName: string | null;

  get fullDateString(): string {
    return `${this.transactionDate.day}/${this.transactionDate.month}/${this.transactionDate.year} ${this.transactionDate.hour}:${this.transactionDate.minute}`;
  }
}
