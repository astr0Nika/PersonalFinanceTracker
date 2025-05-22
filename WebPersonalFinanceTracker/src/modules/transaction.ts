export interface Transaction {
  title: string;
  transactionDate: Date;
  price: number;
  isIncome: boolean;
  transactionDescriptionName: string | undefined;
}
