namespace FinanceTracker.Core.DTO
{
    public class TransactionView
    {
        public TransactionView(string title, DateTime transactionDate, string? transactionDescriptionName, double price, bool isIncome)
        {
            Title = title;
            TransactionDate = new DateTimeView(transactionDate);
            TransactionDescriptionName = transactionDescriptionName;
            Price = price;
            IsIncome = isIncome;
        }

        public TransactionView(string title, DateTimeView transactionDate, string? transactionDescriptionName, double price, bool isIncome)
        {
            Title = title;
            TransactionDate = transactionDate;
            TransactionDescriptionName = transactionDescriptionName;
            Price = price;
            IsIncome = isIncome;
        }

        public string Title { get; private set; }

        public DateTimeView TransactionDate { get; private set; }

        public string? TransactionDescriptionName { get; private set; }

        public double Price { get; private set; }

        public bool IsIncome { get; private set; }
    }
}
