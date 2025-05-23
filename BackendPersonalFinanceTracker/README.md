# BackendPersonalFinanceTracker

## Run API

### Development Mode

- run in any editor that allows you to compile c#
- startup project is `FinanceTracker.API`
- after running the project, `swagger` will open, showing all public functions

### Deploy

Not documentation

## Dependencies

- **Microsoft.EntityFrameworkCore** 9.0.5
  - Abstractions
  - Relational
  - Sqlite
  - Tools
- **Swashbuckle.AspNetCore** 8.1.1

## Database

`TransactionContextFactory` class will add the context to the service collection. One of the functions in the class should be called from API `Programm.cs`.

**Currently in use** is the Sqlite Database which file is located in Local AppData Folder.

**Exchanging** where the Sqlite will be saved can currently be done in the function itself.
