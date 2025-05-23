export interface Transaction {
  title: string;
  transactionDate: string;
  price: number;
  isIncome: boolean;
  transactionDescriptionName: string | null;
}
