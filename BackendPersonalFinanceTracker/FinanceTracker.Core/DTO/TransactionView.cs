namespace FinanceTracker.Core.DTO
{
    public class TransactionView
    {
        public TransactionView(string title, DateTime transactionDate, string? transactionDescriptionName, decimal price, bool isIncome)
        {
            Title = title;
            TransactionDate = transactionDate;
            TransactionDescriptionName = transactionDescriptionName;
            Price = price;
            IsIncome = isIncome;
        }

        public string Title { get; private set; }

        public DateTime TransactionDate { get; private set; }

        public string? TransactionDescriptionName { get; private set; }

        public decimal Price { get; private set; }

        public bool IsIncome { get; private set; }
    }
}
