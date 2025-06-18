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
        public async Task CreateTransaction([FromBody] TransactionRequest transactionRequest)
        {
            if (string.IsNullOrEmpty(transactionRequest.Title) || transactionRequest.Price <= 0)
            {
                // TODO: better exception
                throw new Exception("aaaaaaaaaaaaaaaaaaa");
            }

            DateTime date = transactionRequest.TransactionDate?.ConvertToDateTime() ?? new DateTime();

            await _transactionRepo.CreateAsync(transactionRequest.Title, transactionRequest.Price, transactionRequest.IsIncome, transactionRequest.TransactionDescriptionId, date);
        }
    }
}
