export class Transaction {
  id: number;
  title: string;
  date: Date;
  price: number;
  isIncome: boolean;
  description: string | undefined;

  constructor(
    transactionId: number,
    title: string,
    transactionDate: Date,
    price: number,
    isIncome: boolean,
    transactionDescriptionName: string | undefined = undefined
  ) {
    this.id = transactionId;
    this.title = title;
    this.date = transactionDate;
    this.price = price;
    this.isIncome = isIncome;
    this.description = transactionDescriptionName;
  }
}
