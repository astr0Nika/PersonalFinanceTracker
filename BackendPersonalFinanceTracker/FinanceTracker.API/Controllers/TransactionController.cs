using FinanceTracker.API.DTO;
using FinanceTracker.Data;
using FinanceTracker.Data.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FinanceTracker.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TransactionController : Controller
    {
        private readonly TransactionContext _context;

        public TransactionController(TransactionContext context)
        {
            _context = context;
        }

        [HttpGet("GetTransactions")]
        public async Task<List<TransactionView>> GetTransactionsAsync()
        {
            List<TransactionEntity> result = await _context.Transactions
                .Include(x => x.TransactionDescription)
                .ToListAsync();

            return result.Select(t => new TransactionView()
            {
                IsIncome = t.IsIncome,
                Price = t.Price,
                Title = t.Title,
                TransactionDate = t.TransactionDate,
                TransactionDescriptionName = t.TransactionDescription?.Title
            }).ToList();
        }

        [HttpGet("GetTransactionDescriptions")]
        public async Task<List<TransactionDescriptionEntity>> GetTransactionDescriptionsAsync()
        {
            return await _context.TransactionDescriptions.ToListAsync();
        }

        [HttpPost("CreateTransaction")]
        public async Task<bool> CreateTransaction(string title, decimal price, bool isIncoming, int? transactionDescriptionId = null)
        {
            try
            {
                TransactionDescriptionEntity found = await _context.TransactionDescriptions
                    .Where(td => td.TransactionDescriptionId == transactionDescriptionId)
                    .FirstOrDefaultAsync()
                    ?? throw new Exception("Transaction Description not found");

                await _context.Transactions.AddAsync(new TransactionEntity()
                {
                    Title = title,
                    Price = price,
                    IsIncome = isIncoming,
                    TransactionDate = DateTime.Now,
                    TransactionDescription = found
                });

                await _context.SaveChangesAsync();
                return true;
            }
            catch
            {
                return false;
            }
        }

        [HttpPost("CreateTransactionDescription")]
        public async Task<bool> CreateTransactionDescription(string title)
        {
            try
            {
                await _context.TransactionDescriptions.AddAsync(new TransactionDescriptionEntity()
                {
                    Title = title
                });

                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}
