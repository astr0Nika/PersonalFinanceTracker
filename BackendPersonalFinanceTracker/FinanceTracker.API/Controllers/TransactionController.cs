using FinanceTracker.Core;
using FinanceTracker.Core.DTO;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace FinanceTracker.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [EnableCors("MyPolicy")]
    public class TransactionController : Controller
    {
        private readonly TransactionRepo _transactionRepo;

        public TransactionController(TransactionRepo repository)
        {
            _transactionRepo = repository;
        }

        [HttpGet("GetTransactionList")]
        public async Task<List<TransactionView>> GetTransactionsAsync()
        {
            return await _transactionRepo.GetTransactionListAsync();
        }

        [HttpPost("Create")]
        public async Task CreateTransaction(string title, decimal price, bool isIncoming, int? transactionDescriptionId = null)
        {
            // TODO: check parameters
            await _transactionRepo.CreateAsync(title, price, isIncoming, transactionDescriptionId);
        }
    }
}
