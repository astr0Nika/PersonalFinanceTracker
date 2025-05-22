using System.ComponentModel.DataAnnotations;

namespace FinanceTracker.Data.Models
{
    public class TransactionEntity
    {
        [Key]
        public int TransactionId { get; set; }
        
        /// <summary>
        /// Description of a transactions
        /// </summary>
        [Required]
        public string Title { get; set; }

        /// <summary>
        /// Date of creation
        /// </summary>
        [Required]
        public DateTime TransactionDate { get; set; }

        /// <summary>
        /// Description/Type of a transaction - FK to table 'TransactionDescriptionEntity'
        /// </summary>
        public int? TransactionDescriptionId { get; set; }

        [Required]
        public decimal Price { get; set; }

        /// <summary>
        /// True if receiving money. False if exporting money
        /// </summary>
        [Required]
        public bool IsIncome { get; set; }

        // navigational property
        public virtual TransactionDescriptionEntity? TransactionDescription { get; set; }
    }
}
