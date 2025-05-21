using System.ComponentModel.DataAnnotations;

namespace FinanceTracker.Data.Models
{
    public class TransactionEntity
    {
        [Key]
        public int TransactionId { get; set; }
        
        [Required]
        public string Title { get; set; }

        [Required]
        public DateTime TransactionDate { get; set; }

        public int? TransactionDescriptionId { get; set; }

        [Required]
        public decimal Price { get; set; }

        [Required]
        public bool IsIncome { get; set; }

        public virtual TransactionDescriptionEntity? TransactionDescription { get; set; }
    }
}
