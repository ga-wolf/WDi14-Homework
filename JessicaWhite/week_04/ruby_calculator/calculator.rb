# Calculator
# You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
#
# Specification:
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
#
# Phase 1:
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
#
# Phase 2:
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents (to the power of... you would use 4 ** 4), square roots)


# A user should be given a menu of operations
# A user should be able to choose from the menu
def menu
  puts "(a) - addition "
  puts "(s) - subtraction "
  puts "(m) - multiplication "
  puts "(d) - division "
  puts "(sq) - square root "
  puts "(pow) - power of "
  puts "(q) - quitting " #puts is next line input
  print "Enter your choice: " #print is same line input
  gets.chomp()
end
user_choice = menu()


# Basic Functions
def add
  print "What is your first number? "
  first_number = gets.to_f
  print "What is your second number? "
  second_number = gets.to_f

  result = first_number + second_number

  puts "The result is #{result}"
end

def subtract
  print "What is your number to subtract from? "
  sub_whole = gets.to_f
  print "What is the subtraction number? "
  sub_minus = gets.to_f

  result = sub_whole - sub_minus

  puts "The result is #{result}"
end

def multiply
  print "What is the first number? "
  num_1 = gets.to_f
  print "What is the second number? "
  num_2 = gets.to_f

  result = num_1 * num_2

  puts "The result is #{result}"
end

def divide
  print "What is the number you want to divide? "
  to_div = gets.to_f
  print "And you want that to be divided by? "
  div_by = gets.to_f

  result = to_div / div_by

  puts "The result is #{result}"
end

# Advanced Functions
def squareroot
  print "What is the number you want to find the root of? "
  to_root = gets.to_f

  result = Math.sqrt(to_root)

  puts "The result is #{result}"
end

def power_of
  print "What is the number you want to square? "
  to_square = gets.to_f

  result = to_square ** to_square

  puts "The result is #{result}"
end


# Keep running the menu until the choice that the user makes is equal to the string q
# while user_choice != "q"
# This process should continue until the user selects a quit option from the menu
until user_choice == "q"

  case user_choice
  when "a" then add()
  when "s" then subtract()
  when "m" then multiply()
  when "d" then divide()
  when "sq" then squareroot()
  when "pow" then power_of()

  else
    puts "Invalid selection, dingus."
  end

  user_choice = menu()
  # binding.pry (this is useful to debug)
end
