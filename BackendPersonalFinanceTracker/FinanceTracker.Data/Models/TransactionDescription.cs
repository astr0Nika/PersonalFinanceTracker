using System.ComponentModel.DataAnnotations;

namespace FinanceTracker.Data.Models
{
    public class TransactionDescription
    {
        [Key]
        public int TransactionDescriptionId { get; set; }

        [Required]
        public string Title { get; set; } = string.Empty;

        public List<Transaction> Transactions { get; set; }
    }
}
