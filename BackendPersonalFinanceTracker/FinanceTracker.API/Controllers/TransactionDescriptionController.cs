using FinanceTracker.Core;
using FinanceTracker.Core.DTO;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace FinanceTracker.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [EnableCors("MyPolicy")]
    public class TransactionDescriptionController : Controller
    {
        private readonly TransactionDescriptionRepo _transactionDescriptionRepo;

        public TransactionDescriptionController(TransactionDescriptionRepo reposetory)
        {
            _transactionDescriptionRepo = reposetory;
        }

        [HttpPost("Create")]
        public async Task CreateTransactionDescriptionAsync(string title)
        {
            // TODO: add what happens when exception
            if (string.IsNullOrEmpty(title))
            {
                throw new ArgumentNullException(nameof(title));
            }

            await _transactionDescriptionRepo.CreateAsync(title);
        }

        [HttpGet("GetTransactionDescriptionList")]
        public async Task<List<TransactionDescriptionView>> GetTransactionDescriptionsAsync()
        {
            return await _transactionDescriptionRepo.GetDescriptionListAsync();
        }
    }
}
