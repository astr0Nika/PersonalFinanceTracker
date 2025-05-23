using FinanceTracker.Core.DTO;
using FinanceTracker.Data;
using FinanceTracker.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace FinanceTracker.Core
{
    public class TransactionDescriptionRepo
    {
        public TransactionContext _context;

        public TransactionDescriptionRepo(TransactionContext context)
        {
            _context = context;
        }

        public async Task<List<TransactionDescriptionView>> GetDescriptionListAsync()
        {
            var result = await _context.TransactionDescriptions.ToListAsync();
            return result.Select(td => new TransactionDescriptionView(td.Title)).ToList();
        }

        public async Task CreateAsync(string title)
        {
            await _context.TransactionDescriptions
                .AddAsync(new TransactionDescriptionEntity()
                {
                    Title = title
                });

            await _context.SaveChangesAsync();
        }

        public Task UpdateTransactionDescription()
        {
            throw new NotImplementedException();
        }

        public Task DeleteTransactionDescription()
        {
            throw new NotImplementedException();
        }
    }
}
