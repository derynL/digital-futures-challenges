export default class Transactions {
  static balance = [];
  static addFunds(dateObj, amount) {
    this.balance.push(amount);
    let creditTransaction = {
      date: dateObj,
      credit: amount,
      debit: 0,
      balance: this.balance.reduce((acc, val) => {
        return acc + val;
      }, 0),
    };
    return creditTransaction;
  }
  static withdrawFunds(dateObj, amount) {
    this.balance.push(amount);
    let debitTransaction = {
      date: dateObj,
      credit: 0,
      debit: amount,
      balance: this.balance.reduce((acc, val) => {
        return acc + val;
      }, 0),
    };
    return debitTransaction;
  }
}
