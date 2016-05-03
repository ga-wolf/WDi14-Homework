var jsBank = [
  accountZero = {
    ownersName: "Heath Ledger",
    accountNumber: "accountZero",
    currentBalance: 1000,
  },
  accountOne = {
    ownersName: "Jack Sparrow",
    accountNumber: "accountOne",
    currentBalance: 500,
  },
  accountTwo = {
    ownersName: "Dan Harsanyi",
    accountNumber: "accountTwo",
    currentBalance: 8000,
  },
  accountThree = {
    ownersName: "Bela Tarr",
    accountNumber: "accountThree",
    currentBalance: 650,
  },
];

var totalMoneyInJSBank = function() {
  var totalBankBalance = jsBank[0].currentBalance;
  for (var i = 1 ; i < jsBank.length; i += 1) {
      totalBankBalance += jsBank[i].currentBalance;
    }
  return totalBankBalance;
};

var addAccount = function (accountHolder, newAccountNumber, startingBalance) {
      this.ownersName = accountHolder;
      this.accountNumber = newAccountNumber;
      this.currentBalance = startingBalance;
      jsBank.push(this);
}

var printAllAccounts = function() {
  for (var i = 0 ; i < jsBank.length; i += 1) {
        console.log("- Account Holder: " + jsBank[i].ownersName + ", Account Number: " + jsBank[i].accountNumber + ", Current Balance: " + "$" + jsBank[i].currentBalance);
    }
};

var deposit = function (accountNumber, amountToDeposit) {
    var accountToModifyIndex = jsBank.indexOf(accountNumber);
    var currentBalance = jsBank[accountToModifyIndex].currentBalance;
    var newBalance = currentBalance + amountToDeposit;
    console.log("- " + jsBank[accountToModifyIndex].ownersName + " deposited " + "$" + amountToDeposit + "." + " Their new balance is: $" + newBalance + ".");
    jsBank[accountToModifyIndex].currentBalance = newBalance;
    return newBalance;
};

var withdraw = function (accountNumber, amountToWithdraw) {
    var accountToModifyIndex = jsBank.indexOf(accountNumber);
    var currentBalance = jsBank[accountToModifyIndex].currentBalance;

if ((currentBalance - amountToWithdraw < 0)) {
  console.log("Sorry " + jsBank[accountToModifyIndex].ownersName + ", you don't have enough money in your account to withdraw $" + amountToWithdraw + ". Please select a lower amount.");
} else {
    var newBalance = currentBalance - amountToWithdraw;
    console.log("- " + jsBank[accountToModifyIndex].ownersName + " withdrew " + "$" + amountToWithdraw + "." + " Their new balance is: $" + newBalance + ".");
    jsBank[accountToModifyIndex].currentBalance = newBalance;
    return newBalance;
  }
};

var bankingActivity = function () {
  deposit(accountZero, 100);
  withdraw(accountThree, 800);
  withdraw(accountThree, 400);
  deposit(accountTwo, 960);
  deposit(accountFive, 150);
  withdraw(accountFour, 65);
};

console.log("\n");
console.log("Welcome to the Javascript Bank. Please see below a list of current accounts. The total value in the bank right now is $" + totalMoneyInJSBank() + ".");
console.log("\n");
printAllAccounts();
console.log("\n");

var accountFour = new addAccount("Homer Simpson", "accountFour", 520);
var accountFive = new addAccount("Donald Trump", "accountFive", 340);

console.log("Today's banking activity: ");
console.log("\n");
console.log("The following accounts were added: ");
console.log("\n");
console.log(accountFour);
console.log(accountFive);
console.log("\n");
console.log("The following transactions were made: ");
console.log("\n");
console.log(bankingActivity());
console.log("\n");
console.log("The new list of accounts in the JS Bank is below and the new total value in the bank is $" + totalMoneyInJSBank() + ".");
console.log("\n");
printAllAccounts();
