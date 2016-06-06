// Geometry Function Lab

//
// Part 1, Rectangle
//
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

var rectangle = {
  length: 4,
  width: 4
};

var isSquare = function () {
  var result = rectangle.length === rectangle.width;
  return result;
}

var area = function () {
  var result = rectangle.length*rectangle.width;
  return result;
}

var perimeter = function () {
  var result = 2*rectangle.length + 2*rectangle.width;
  return result;
}


// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

var usefulA = triangle.sideA;
var usefulB = triangle.sideB;
var usefulC = triangle.sideC;

var isEquilateral = function () {
 var result = usefulA === usefulB && usefulB === usefulC;
 return result;
}

var isIsosceles = function () {
  var result = usefulA === usefulB || usefulB === usefulC || usefulC === usefulA;
  return result;
}

var areaTwo = function () {
  var someS = (usefulA + usefulB + usefulC)/2
  var result = Math.pow(someS*(someS-usefulA)*(someS-usefulB)*(someS-usefulC), 0.5)
  return result;
}

var isObtuse = function () {
  debugger;
  var largest;
  var otherOne;
  var otherTwo;

  if (usefulA>usefulB && usefulB>=usefulC) {
    largest = usefulA;
    otherOne = usefulB;
    otherTwo = usefulC;
  } else if (usefulB>usefulC && usefulC>=usefulA) {
    largest = usefulB;
    otherOne = usefulC;
    otherTwo = usefulA;
  } else if (usefulC>usefulA && usefulA>=usefulB) {
    largest = usefulC;
    otherOne = usefulA;
    otherTwo = usefulB;
  } else {
    largest = usefulA;
    otherOne = usefulB;
    otherTwo = usefulC;
  }

  if ((otherOne*otherOne + otherTwo*otherTwo) < largest*largest) {
    console.log("This is an Obtuse.")
  } else {
    console.log("This is not an Obtuse.")
  }
}


// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank
//
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
//
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// Tips
//
// Don't overthink this. Shorter code is probably the answer.

var curBalance;
var name;
//
// var negative = function() {
//   for(var i=0; i<accounts.length; i +=1) {
//     if (accounts[i].curBalance < 0) {
//     }
//   }
// }

var accounts =
  [{
    curBalance: 5000,
    name: "Phoebe"
  }, {
    curBalance: 17000,
    name: "Rachel"
  }, {
    curBalance: 8500,
    name: "Susan"
  }];

var addAccount = function (balance, newName) {
  var newInfo = {curBalance: balance, name: newName};
  accounts.push(newInfo);
}

var deposit = function (num, customer) {
  for(var i=0; i < accounts.length; i += 1) {
    if (accounts[i].name === customer) {
      accounts[i].curBalance += num;
      console.log(num + "$ deposited.");
      console.log("Total balance is " + accounts[i].curBalance + "$");
    }
  }
}

var withdraw = function (num, customer) {
  for(var i=0; i < accounts.length; i += 1) {
    if (accounts[i].name === customer) {
      if (accounts[i].curBalance - num >= 0) {
        accounts[i].curBalance -= num;
        console.log(num + "$ withdrawn.");
        console.log("Total balance is " + accounts[i].curBalance + "$");
      } else {
        console.log("Transaction denied. Current balance is " + accounts[i].curBalance + ".");
      }
    }
  }
}


//
// Bonus
//
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
var transfer = function(num, fromWho, toWho) {
  for(var i=0; i < accounts.length; i += 1) {
    if(accounts[i].name === fromWho) {
      if (accounts[i].curBalance - num >= 0) {
        accounts[i].curBalance -= num;
        for(var j=0; j < accounts.length; j += 1) {
          if (accounts[j].name === toWho) {
            accounts[j].curBalance += num;
            console.log("Transaction complete. " + num + "$ tranferred to " + toWho + ".");
          }
        }
      } else {
        console.log("Transaction denied. Current balance is " + accounts[i].curBalance + ".");
      }
    }
  }
}
