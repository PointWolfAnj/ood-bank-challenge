const BankAccount = require("../src/bankaccount.js")
const transaction = require("../src/transaction.js")
const Printer = require("../src/printer.js")

describe("BankAccount", () => {
  let bankAccount

  beforeEach(() => {
    bankAccount = new BankAccount()

  })

  it("checks the balance of the new account", () => {
    // set up
    const expected = 0
  
    // execute
    const result = bankAccount.checkBalance()
    // verify
    expect(result).toEqual(expected)
  })

  it("receives a deposit in the new account", () => {
    // set up
    const expected = 1000
    // deposit some funds into the account
    bankAccount.depositFunds(1000)
    // execute
    // use the checkBalance method to check what is in the account
    
    const result = bankAccount.checkBalance()

    // verify
    expect(result).toEqual(expected)
  })

  it("can deal with withdrawing money from the new account", () => {
    // set up
    const expected = 500
  
    // execute
    bankAccount.depositFunds(1000)
    bankAccount.withdrawFunds(500)
    const result = bankAccount.checkBalance()
    // verify
    expect(result).toEqual(expected)
  })

  it("throws an error if the deposit or withdraw amount is negative", () => {
    const error = new Error("Can't withdraw a negative amount")
    const error2 = new Error("Can't deposit a negative amount")
    const errorTest = () => bankAccount.withdrawFunds(-10)
    const errorTest2 = () => bankAccount.depositFunds(-10)
    expect(errorTest).toThrow(error)
    expect(errorTest2).toThrow(error2)
  })

  it("throws an error if the withdrawal is greater than the balance available", () => {
    const error = new Error("Can't withdraw more than your balance that is available")
    const errorTest = () => bankAccount.withdrawFunds(1000)
    expect(errorTest).toThrow(error)
  })
}) 