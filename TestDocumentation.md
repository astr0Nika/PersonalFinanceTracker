# Testing

| Nr. | Date Time        | Action                          | Input                                             | Expectation                                    | Status    |
| --- | ---------------- | ------------------------------- | ------------------------------------------------- | ---------------------------------------------- | --------- |
| 1   | 16.05.2025:12:28 | To see how this would look like | -                                                 | None                                           | Unknown   |
| 2   | 19.05.2025 08:58 | Try to create sqlite database   | Before: migration created, database updated       | Creates a db file                              | Failed    |
| 3   | 19.05.2025 09:00 | Start API                       | -                                                 | localhost page opens with api and it's methods | Failed    |
| 4   | 19.05.2025 09:19 | Start API                       | -                                                 | localhost page opens with api and it's methods | Succeeded |
| 5   | 19.05.2025 15:19 | Start API                       | -                                                 | localhost page opens with api and it's methods | Succeeded |
| 6   | 19.05.2025 16:02 | Create Transaction              | title=Januar Lohn: price=1200.00; isIncoming=true | eintrag in db                                  | Failed    |
| 7   | 19.05.2025 16:12 | Create Transaction              | title=Januar Lohn: price=1200.00; isIncoming=true | eintrag in db                                  | Succeeded |
| 8   | 21.05.2025 08:10 | Start API                       | -                                                 | localhost page opens with api and it's methods | Failed    |
| 9   | 21.05.2025 08:13 | Start API                       | -                                                 | localhost page opens with api and it's methods | Succeeded |
| 10  | 21.05.2025 08:14 | Get Transactions                | -                                                 | return the one current transaction in db file  | Succeeded |
