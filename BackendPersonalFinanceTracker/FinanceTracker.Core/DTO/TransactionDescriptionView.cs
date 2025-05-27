namespace FinanceTracker.Core.DTO
{
    public class TransactionDescriptionView
    {
        public TransactionDescriptionView(string title)
        {
            Title = title;
            TransactionDescriptionId = -1;
        }

        public TransactionDescriptionView(string title, int id)
        {
            Title = title;
            TransactionDescriptionId = id;
        }

        public int TransactionDescriptionId { get; private set; }
        public string Title { get; private set; }
    }
}
