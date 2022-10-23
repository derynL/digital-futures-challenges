export default class Statements {
  static heading = `date       || credit  || debit  || balance`;
  static createStatement(transactionHistory) {
    console.log(this.heading);
    let statementDetails;
    for (let i = 0; i < transactionHistory.length; i++) {
      statementDetails = `${transactionHistory[i].date} || \x1b[32m${
        transactionHistory[i].credit > 0
          ? transactionHistory[i].credit.toFixed(2)
          : "       "
      }\x1b[0m || \x1b[31m${
        transactionHistory[i].debit < 0
          ? Math.abs(transactionHistory[i].debit).toFixed(2)
          : "      "
      }\x1b[0m || ${transactionHistory[i].balance.toFixed(2)}`;
      console.log(statementDetails);
    }
  }
}
// ESCAPE CODES FOR COLOUR FORMATING
// \x1b[32m = green; \x1b[31m = red; \x1b[0m reverts to default terminal colour
