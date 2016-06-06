// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

//create bank accounts list using by array.accounts details inside create by objects
var accounts = [
  {accountNumber: 1234, accountName: "Tom", currentBalance: 2040900,},
  {accountNumber: 1235, accountName: "Jack", currentBalance: 3442000},
  {accountNumber: 1236, accountName: "Will", currentBalance: 390010},
  {accountNumber: 1237, accountName: "Chris", currentBalance: 203200}
];

// method of return the total sum of money in the accounts.
var sumOfBank = function () {
  var sum = 0;
  for (var i = 0; i < accounts.length; i++) {
    sum += accounts[i].currentBalance;
  }
  var message = sum + " is the total balance of the bank.";
  console.log(message);
}

//  enroll a new account at the bank
var addNewAccount = function (newName) {
  var createNumber = accounts[accounts.length -1].accountNumber + 1;
  console.log(createNumber);
  console.log(newName);
  accounts.push({accountNumber: createNumber, accountName: newName, currentBalance: 0});
  for (var i = 0; i < accounts.length; i++) {
    console.log(accounts[i]);
  }
  }

// make some withdrawals of account,show the balance after withdraw
var withdraw = function (accNum, amounts) {
  var findAccountNumber = function (checkAccount) {
    return checkAccount.accountNumber === accNum;
  }
  if (accounts.find(findAccountNumber).currentBalance < amounts) {
    alert("Sorry, Low balance. Withdraw denied.");
  } else {
    var newBalance = accounts.find(findAccountNumber).currentBalance - amounts;
    accounts.find(findAccountNumber).currentBalance = newBalance;
    alert("Withdraw successful. your current balance is " + newBalance);
  }
}

// make some deposits of account,show the balance after deposit.
var deposit = function (accNum, amounts) {
  var findAccountNumber = function (checkAccount) {
    return checkAccount.accountNumber === accNum;
  }
  var newBalance = accounts.find(findAccountNumber).currentBalance + amounts;
  accounts.find(findAccountNumber).currentBalance = newBalance;
  alert("Deposit successful. your current balance is " + newBalance);
}

//function of transfer amounts between two accounts.
var transfer = function (fromAcc, toAcc, amounts) {
  var findFromAccountNumber = function (checkAccount) {
    return checkAccount.accountNumber === fromAcc;
  }
  var findToAccountNumber = function (checkAccount) {
    return checkAccount.accountNumber === toAcc;
  }
  var fromAccBalance = accounts.find(findFromAccountNumber).currentBalance - amounts;
  var toAccBalance = accounts.find(findToAccountNumber).currentBalance + amounts;
  accounts.find(findFromAccountNumber).currentBalance = fromAccBalance;
  accounts.find(findToAccountNumber).currentBalance = toAccBalance;
  console.log("You transfer $" + amounts + " to " + accounts.find(findToAccountNumber).accountName +
              ", and your balance is $" + fromAccBalance + " !");
  console.log("You received $" + amounts + " from " + accounts.find(findFromAccountNumber).accountName+
              ", and your balance is $" + toAccBalance + " !");
}

transfer(1234, 1235, 99);
