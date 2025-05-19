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
        public async Task<List<Transaction>> GetTransactionsAsync()
        {
            return await _context.Transactions.ToListAsync();
        }

        [HttpPost("CreateTransaction")]
        public async Task<bool> CreateTransaction(string title, decimal price, bool isIncoming)
        {
            try
            {
                await _context.Transactions.AddAsync(new Transaction()
                {
                    Title = title,
                    Price = price,
                    IsIncome = isIncoming,
                    TransactionDate = DateTime.Now,
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
