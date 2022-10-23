export default class Account {
  #transactionHistory = [];
  // getAccountBalance() {

  // }
  getTransactionHistory() {
    return this.#transactionHistory;
  }
  addFunds(transaction) {
    this.#transactionHistory.unshift(transaction);
  }
  withdrawFunds(transaction) {
    this.#transactionHistory.unshift(transaction);
  }
  getStatement(createStatement) {
    return createStatement;
  }
}
