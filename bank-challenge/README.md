# Bank

This challenge helps you practice your OO design skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

### Requirements

- You should be able to interact with your code via the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, credit or debit amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

## User Stories and Domain Models

```
1.
As an account holder,
So that I can safely store my money,
I want to be able to make deposits to my account
```

| Objects      | Properties                 | Messages                 | Output |
| ------------ | -------------------------- | ------------------------ | ------ |
| Account      | creditTransactions(@array) | addFunds(amount)         | void   |
|              |                            |                          |        |
| Transactions |                            | deposit(amount) - static | void   |

**Proposed Tests**

1. Check that the account object calls the addFunds method
2. Check that the Transactions.addFunds method is called

```
2.
As an account holder,
So that I can easily access my money,
I want to be able to withdraw it
```

| Objects      | Properties                      | Messages                  | Output |
| ------------ | ------------------------------- | ------------------------- | ------ |
| Account      | debitTransactions(number array) | withdrawFunds(amount)     | void   |
|              |                                 |                           |        |
| Transactions |                                 | withdraw(amount) - static | void   |

**Proposed Tests**

1. Check that the account object calls the withdrawFunds method
2. Check that the Transactions.withdrawFunds method is called

```
3.
As a bank manager,
So that the bank can easily keep track of transactions,
I want the transaction amount and date to be logged
```

| Objects      | Properties                                         | Messages      | Output            |
| ------------ | -------------------------------------------------- | ------------- | ----------------- |
| Account      | transactionHistory[{Date, Credit, Debit, Balance}] | addFunds      | void              |
|              |                                                    | withdrawFunds | void              |
|              |                                                    |               |                   |
|              |                                                    |               |                   |
| Transactions |                                                    | addFunds      | transactionObject |
|              |                                                    | withdrawFunds | transactionObject |

**Proposed Tests**

1. Check that addFunds in the testAccount object adds the transaction object to testAccount.transactionHistory
2. Check that withdrawFunds in the testAccount object adds the transaction object to testAccount.transactionHistory

```
4.
As a bank manager,
So that the bank and customer can easily keep track of transactions,
I want the account balance to be updated with each transaction

```

| Objects      | Properties     | Messages          | Output |
| ------------ | -------------- | ----------------- | ------ |
| Account      | accountBalance | getAccountBalance | number |
|              |                |                   |        |
| Transactions |                |                   |        |

**Proposed Tests**

1. Check that account balance reflects deposit transaction
2. Check that account balance updates accurately after another credit transaction
3. Check that account balance reflects withdrawal transaction

```

5.
As an account holder,
So that I can easily keep track of transactions,
I want to be able to print a statement

```

| Objects    | Properties | Messages                                     | Output        |
| ---------- | ---------- | -------------------------------------------- | ------------- |
| Account    |            | getStatement()                               | function call |
|            |            |                                              |               |
| Statements |            | createStatement(transactionHistory) - static |               |

**Proposed Tests**

1. Check that the createStatement() method is called by getStatement()
2. Check that console.log is called the correct number of times

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012
**And** a deposit of 2000 on 13-01-2012
**And** a withdrawal of 500 on 14-01-2012
**When** she prints her bank statement
**Then** she would see

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```
