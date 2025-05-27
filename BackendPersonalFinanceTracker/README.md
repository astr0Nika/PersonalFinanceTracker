# BackendPersonalFinanceTracker

## Run API

### Development Mode

- create `appsettings.json` in FinanceTracker.API Project

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "TransactionConnectionSqlServer": "you sql server db connecion"
  }
}
```

-
- run in any editor that allows you to compile c#
- startup project is `FinanceTracker.API`
- after running the project, `swagger` will open, showing all public functions

### Deploy

Not documentation

## Dependencies

- **Microsoft.EntityFrameworkCore** 9.0.5
  - Abstractions
  - Relational
  - SqlServer
  - Tools
- **Microsoft.Extensions.Configuration.FileExtensions** 9.0.5
- **Microsoft.Extensions.Configuration.Json** 9.0.5
- **Swashbuckle.AspNetCore** 8.1.1

## Database

**Currently in use** is the Local SQL Server. Path needs to be defined in appsettings.json.
