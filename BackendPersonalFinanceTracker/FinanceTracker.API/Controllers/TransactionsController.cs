using FinanceTracker.Core;
using FinanceTracker.Core.DTO;
using FinanceTracker.Core.Extensions;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace FinanceTracker.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [EnableCors("MyPolicy")]
    public class TransactionsController : Controller
    {
        private readonly TransactionRepo _transactionRepo;

        public TransactionsController(TransactionRepo repository)
        {
            _transactionRepo = repository;
        }

        [HttpGet("GetList")]
        public async Task<List<TransactionView>> GetTransactionsAsync()
        {
            return await _transactionRepo.GetTransactionListAsync();
        }

        [HttpPost("Create")]
        public async Task CreateTransaction(string title, double price, bool isIncoming, int? transactionDescriptionId = null, DateTimeView? transactionDate = null)
        {
            // TODO: check parameters
            DateTime date = transactionDate?.ConvertToDateTime() ?? new DateTime();

            await _transactionRepo.CreateAsync(title, price, isIncoming, transactionDescriptionId, date);
        }
    }
}
