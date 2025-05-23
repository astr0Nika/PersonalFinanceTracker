using FinanceTracker.Core;
using FinanceTracker.Data;

var builder = WebApplication.CreateBuilder(args);

// https://learn.microsoft.com/en-us/aspnet/core/security/cors?view=aspnetcore-8.0
builder.Services.AddCors(options =>
{
    options.AddPolicy("MyPolicy", policy =>
    {
        // this websites can get a response
        policy.WithOrigins("http://localhost:4200");
    });
});

// Add services to the container.
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add sqlite connection
builder.Services.AddTransactionContextSqlite();
builder.Services.AddScoped<TransactionRepo>();
builder.Services.AddScoped<TransactionDescriptionRepo>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors();
app.UseAuthorization();
app.MapControllers();

app.Run();
