using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace FinanceTracker.Data
{
    public static class TransactionContextFactory
    {
        public static IServiceCollection AddTransactionContext(this IServiceCollection services, IConfiguration configuration)
        {
            // TODO: for sql server, which the path needs to be read from appsettings.json
            //options => options.UseSqlite(builder.Configuration["ConnectionStrings:SqliteConnection"])

            throw new NotImplementedException();
        }

        public static IServiceCollection AddTransactionContext(this IServiceCollection services)
        {
            // create db file ine Local AppData
            var folder = Environment.SpecialFolder.LocalApplicationData;
            var folderPath = Environment.GetFolderPath(folder);
            string path = Path.Join(folderPath, "FinanceTrackerDB.db");

            services.AddDbContext<TransactionContext>(options =>
                options.UseSqlite($"Data Source={path}"));

            return services;
        }
    }
}
