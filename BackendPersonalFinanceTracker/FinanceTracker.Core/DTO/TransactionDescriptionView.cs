namespace FinanceTracker.Core.DTO
{
    public class TransactionDescriptionView
    {
        public TransactionDescriptionView(string title)
        {
            Title = title;
        }

        public string Title { get; private set; }
    }
}
