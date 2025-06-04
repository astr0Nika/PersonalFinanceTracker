export class Transaction {
  transactionId!: number;
  title!: string;
  transactionDate!: DateTime;
  price!: number;
  isIncome!: boolean;
  transactionDescriptionName!: string | null;

  get fullDateString(): string {
    return `${this.transactionDate.day}/${this.transactionDate.month}/${this.transactionDate.year} ${this.transactionDate.hour}:${this.transactionDate.minute}`;
  }
}

export class DateTime {
  year!: number;
  month!: number;
  day!: number;
  hour!: number;
  minute!: number;
}
