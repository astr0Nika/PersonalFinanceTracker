using System.ComponentModel.DataAnnotations;

namespace FinanceTracker.Data.Models
{
    public class TransactionDescriptionEntity
    {
        [Key]
        public int TransactionDescriptionId { get; set; }

        [Required]
        public string Title { get; set; }

        public virtual List<TransactionEntity> Transactions { get; set; }
    }
}
