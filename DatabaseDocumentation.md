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
