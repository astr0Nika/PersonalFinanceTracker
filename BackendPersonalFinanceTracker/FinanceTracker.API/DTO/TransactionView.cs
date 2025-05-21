namespace FinanceTracker.API.DTO
{
    public class TransactionView
    {
        public string Title { get; set; } = string.Empty;

        public DateTime TransactionDate { get; set; }

        public string? TransactionDescriptionName { get; set; }

        public decimal Price { get; set; }

        public bool IsIncome { get; set; }
    }
}
