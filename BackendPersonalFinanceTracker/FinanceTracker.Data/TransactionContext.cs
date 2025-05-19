using FinanceTracker.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace FinanceTracker.Data
{
    public class TransactionContext : DbContext
    {
        public DbSet<Transaction> Transactions { get; set; }

        public DbSet<TransactionDescription> TransactionDescriptions { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var folder = Environment.SpecialFolder.LocalApplicationData;
            var folderPath = Environment.GetFolderPath(folder);
            string path = Path.Join(folderPath, "FinanceTrackerDB.db");

            optionsBuilder.UseSqlite($"Data Source={path}");
        }
    }
}
