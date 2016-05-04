// exercise 3 - The Grade Assigner
for (var i = 60; i <= 100; i += 1 ){


var result = '';

if (i >= 90)
  result = "A"

else if (i >= 80)
  result = "B"

else if (i >= 70)
  result = "C"

else if (i >= 60)
  result = "D"

else
  result = "F"

console.log (" For " + i + " you recieved a " + result )
}
