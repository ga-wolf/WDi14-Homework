def menu ## created method called menu that prints out a bunch of information this means we call it a bunch of times
  puts "(a) - addtion"            ##makes new line
  puts "(s) - subtract"
  puts "(m) - multiply"
  puts "(d) - divide"

  puts "(q) - quitting"           ##
  print "Enter your Choice: "       ## will allot user to to type
  gets.chomp() ## gets the users input
end

user_choice = menu() ## store whatever is typed into that variable


## creates and add mehtos
def add
  print "What is your first number? "
  first_number = gets.to_f ## turns inputs into a float

  print "What is your second number? "
  second_number = gets.to_f
## tha math of 2 inputs given
  result = first_number + second_number
## prints the result out
  puts "The result is #{result}"

end

def subtract
  print "What is your first number? "
  first_number = gets.to_f
  print "What is your second number? "
  second_number = gets.to_f

  result = first_number - second_number
  puts "The result is #{result}"
end

def multiply
  print "What is your first number? "
  first_number = gets.to_f
  print "What is your second number? "
  second_number = gets.to_f

  result = first_number * second_number
  puts "The result is #{result}"
end

def divide
  print "What is your first number? "
  first_number = gets.to_f
  print "What is your second number? "
  second_number = gets.to_f

  result = first_number / second_number
  puts "The result is #{result}"
end

## created an until loop so this will loop untilt he user hit's q
until user_choice == "q"

  case  user_choice
  when "a" then add()
  when "s" then subtract()
  when "m" then multiply()
  when "d" then divide()
  else
    puts "invalid selection, dingus."
end

user_choice = menu()
end


puts "Thank for using our lovely calculator"



















# Explanation
#
# You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
# Specification:
#
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu
# Phase 1
#
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2
#
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)
# Bonus
