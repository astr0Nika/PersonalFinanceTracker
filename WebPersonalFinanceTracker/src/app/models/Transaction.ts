import { DateTime } from './DateTime';

export class Transaction {
  constructor(
    title: string,
    price: number,
    isIncome: boolean,
    transactionDescriptionName: string | null
  ) {
    this.transactionId = 0;
    this.title = title;
    this.transactionDate = new DateTime(new Date());
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
