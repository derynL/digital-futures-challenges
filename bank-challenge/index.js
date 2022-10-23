import Transactions from "./src/transactions.js";
import Account from "./src/account.js";
import Statements from "./src/statements.js";

const account1 = new Account();
account1.addFunds(
  Transactions.addFunds(new Date(2012, 0, 10).toLocaleDateString(), 1000.0)
);

account1.addFunds(
  Transactions.addFunds(new Date(2012, 0, 13).toLocaleDateString(), 2000.0)
);

account1.withdrawFunds(
  Transactions.withdrawFunds(new Date(2012, 0, 14).toLocaleDateString(), -500.0)
);

account1.getStatement(
  Statements.createStatement(account1.getTransactionHistory())
);
