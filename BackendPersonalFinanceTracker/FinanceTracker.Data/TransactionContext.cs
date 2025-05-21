using FinanceTracker.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace FinanceTracker.Data
{
    public class TransactionContext : DbContext
    {
        public TransactionContext(DbContextOptions options) : base(options)
        { }

        public DbSet<Transaction> Transactions { get; set; }

        public DbSet<TransactionDescription> TransactionDescriptions { get; set; }
    }
}
