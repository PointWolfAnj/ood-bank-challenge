const Transaction = require("../src/transaction.js")

class BankAccount {

    constructor() {
        
        this.transactionsArray = []
        this.balance = 0
        
    }

checkBalance() {
    return this.balance
}

depositFunds(credit, date) {
    if (credit < 0){
        throw new Error("Can't deposit a negative amount")
      }
    this.balance += credit
    const transaction = new Transaction (credit, 0, date, this.balance)
    this.transactionsArray.unshift(transaction)
}

withdrawFunds(debit, date) {
    if (debit < 0){
        throw new Error("Can't withdraw a negative amount")
      }
    if (debit > this.balance) {
        throw new Error("Can't withdraw more than your balance")
    }  
    this.balance -= debit
    const transaction = new Transaction (0, debit, date, this.balance)
    this.transactionsArray.unshift(transaction)
}

 transactions() {
     return this.transactionsArray
 }

}

module.exports = BankAccount