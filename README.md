# Personal Finance Tracker

## Idea

A web site, where you can track your finances. Adding (update, delete) your expenses, overview of expenses.

### Extend

- add multiple accounts
- filters
- budget
- export to csv, pdf, etc.
- charts
- daily, weekly, monthly summaries
- multi-language website

## Technology

- Frontend: Angular 19
- Backend: Asp.net core 8 (API)
- Database: SQLite and EF Core

**Help Site:** [Sqlite](https://kenslearningcurve.com/tutorials/using-sqlite-with-entity-framework-core-in-c/)

## Database Structure

### Transaction

| Title                    | Type     | Constraint |
| ------------------------ | -------- | ---------- |
| TransactionId            | int      | PK         |
| Title                    | string   | NOT NULL   |
| TransactionDate          | datetime | NOT NULL   |
| TransactionDescriptionId | int      | FK, NULL   |
| Price                    | decimal  | NOT NULL   |
| IsIncome                 | bool     | NOT NULL   |

#### Example

- 1 | December Salary + Weinachtsgeld | (1, Salary) | 2720,40 | true |
- 2 | Dance | (3, Hobby) | 40,00 | false |
- 3 | Pizza | (6, Other) | 14,40 | false |

### TransactionDescription

| Title                    | Type   | Constraint |
| ------------------------ | ------ | ---------- |
| TransactionDescriptionId | int    | PK         |
| Title                    | string | NOT NULL   |

#### Examples

- Salary
- Grocery
- Hobby
- Holiday
- Gift
- Other

## UI Design

- List with all transactions
- Add new transaction
- Update an existing transaction
- Delete a transaction
