using FinanceTracker.Data.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace FinanceTracker.Data
{
    public class TransactionContext : DbContext
    {
        public DbSet<TransactionEntity> Transactions { get; set; }

        public DbSet<TransactionDescriptionEntity> TransactionDescriptions { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var basePath = Path.Combine(Directory.GetCurrentDirectory(), "../FinanceTracker.API");

            var configuration = new ConfigurationBuilder()
                .SetBasePath(basePath)
                .AddJsonFile("appsettings.json")
                .Build();

            optionsBuilder.UseSqlServer(configuration.GetConnectionString("TransactionConnectionSqlServer"));
        }
    }
}
