# Testing

## API (Backend)

| Nr. | Date Time        | Action                                  | Input                                                                        | Expectation                                    | Status    |
| --- | ---------------- | --------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------- | --------- |
| 2   | 19.05.2025 08:58 | Try to create sqlite database           | Before: migration created, database updated                                  | Creates a db file                              | Failed    |
| 3   | 19.05.2025 09:00 | Start API                               | -                                                                            | localhost page opens with api and it's methods | Failed    |
| 4   | 19.05.2025 09:19 | Start API                               | -                                                                            | localhost page opens with api and it's methods | Succeeded |
| 5   | 19.05.2025 15:19 | Start API                               | -                                                                            | localhost page opens with api and it's methods | Succeeded |
| 6   | 19.05.2025 16:02 | Create Transaction                      | title=Januar Lohn: price=1200.00; isIncoming=true                            | eintrag in db                                  | Failed    |
| 7   | 19.05.2025 16:12 | Create Transaction                      | title=Januar Lohn: price=1200.00; isIncoming=true                            | eintrag in db                                  | Succeeded |
| 8   | 21.05.2025 08:10 | Start API                               | -                                                                            | localhost page opens with api and it's methods | Failed    |
| 9   | 21.05.2025 08:13 | Start API                               | -                                                                            | localhost page opens with api and it's methods | Succeeded |
| 10  | 21.05.2025 08:14 | Get Transactions                        | -                                                                            | return the one current transaction in db file  | Succeeded |
| 11  | 21.05.2025 15:17 | Create Transaction Descriptions         | title=Salary                                                                 | create new entry in db                         | Succeeded |
| 12  | 21.05.2025 15:21 | Create Transactions with description id | title=Gehalt April; transactionDescriptionId=0; price=1200; isIncome=true    | create new entry in db                         | Failed    |
| 13  | 21.05.2025 15:31 | Create Transactions with description id | title=April Einkommen; transactionDescriptionId=1; price=1240; isIncome=true | create new entry in db                         | Succeed   |

## UI (Website)

| Nr. | Date Time        | Action                     | Input | Expectation                      | Status    |
| --- | ---------------- | -------------------------- | ----- | -------------------------------- | --------- |
| 1   | 21.05.2025 10:00 | Run Angular Website        | -     | No error, navigation/routes work | Succeeded |
| 2   | 21.05.2025 10:57 | Run Angular Website        | -     | No error, navigation/routes work | Succeeded |
| 3   | 22.05.2025 07:35 | API Call - GetTransactions | -     | List of transactions from db     | Failed    |
| 4   | 22.05.2025 07:44 | API Call - GetTransactions | -     | List of transactions from db     | Failed    |
| 5   | 22.05.2025 15:34 | API Call - GetTransactions | -     | List of transactions from db     | Succeed   |
