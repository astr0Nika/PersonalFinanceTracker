using System.ComponentModel.DataAnnotations;

namespace FinanceTracker.Data.Models
{
    public class TransactionDescription
    {
        [Key]
        public int TransactionDescriptionId { get; set; }

        [Required]
        public string Title { get; set; }

        public virtual List<Transaction> Transactions { get; set; }
    }
}
