using FinanceTracker.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace FinanceTracker.Data
{
    public class TransactionContext : DbContext
    {
        public TransactionContext(DbContextOptions options) : base(options)
        { }

        public DbSet<TransactionEntity> Transactions { get; set; }

        public DbSet<TransactionDescriptionEntity> TransactionDescriptions { get; set; }
    }
}
