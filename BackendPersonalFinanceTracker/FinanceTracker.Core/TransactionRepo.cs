using FinanceTracker.Core.DTO;
using FinanceTracker.Data;
using FinanceTracker.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace FinanceTracker.Core
{
    public class TransactionRepo
    {
        private readonly TransactionContext _context;

        public TransactionRepo(TransactionContext context)
        {
            _context = context;
        }

        public async Task<List<TransactionView>> GetTransactionListAsync()
        {
            List<TransactionEntity> result = await _context.Transactions
                .Include(x => x.TransactionDescription)
                .ToListAsync();

            return result.Select(t => new TransactionView(t.Title, t.TransactionDate, t.TransactionDescription?.Title, t.Price, t.IsIncome))
                .ToList();
        }

        public async Task CreateAsync(string title, double price, bool isIncome, int? transactionDescriptionId, DateTime transactionDate)
        {
            TransactionDescriptionEntity? found = await _context.TransactionDescriptions
                    .Where(td => td.TransactionDescriptionId == transactionDescriptionId)
                    .FirstOrDefaultAsync();

            await _context.Transactions.AddAsync(new TransactionEntity()
            {
                Title = title,
                Price = price,
                IsIncome = isIncome,
                TransactionDate = transactionDate,
                TransactionDescription = found
            });

            await _context.SaveChangesAsync();
        }

        public Task UpdateTransaction()
        {
            throw new NotImplementedException();
        }

        public Task DeleteTransaction()
        {
            throw new NotImplementedException();
        }
    }
}
