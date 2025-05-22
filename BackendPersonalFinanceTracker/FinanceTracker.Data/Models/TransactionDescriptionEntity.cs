using System.ComponentModel.DataAnnotations;

namespace FinanceTracker.Data.Models
{
    public class TransactionDescriptionEntity
    {
        [Key]
        public int TransactionDescriptionId { get; set; }

        /// <summary>
        /// Name of a transaction type that describes transactions
        /// </summary>
        [Required]
        public string Title { get; set; }

        // navigational property
        public virtual List<TransactionEntity> Transactions { get; set; }
    }
}
