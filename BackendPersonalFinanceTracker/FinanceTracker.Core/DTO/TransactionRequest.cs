namespace FinanceTracker.Core.DTO
{
    public class TransactionRequest
    {
        public string Title { get; set; }
        public double Price { get; set; }
        public bool IsIncome { get; set; }
        public DateTimeView? TransactionDate { get; set; }
        public int? TransactionDescriptionId { get; set; }
    }
}
