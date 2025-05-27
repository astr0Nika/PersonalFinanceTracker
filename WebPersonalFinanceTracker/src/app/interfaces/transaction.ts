export interface ITransaction {
  transactionId: number;
  title: string;
  transactionDate: IDateTime;
  price: number;
  isIncome: boolean;
  transactionDescriptionName: string | null;
}

export interface IDateTime {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
}
