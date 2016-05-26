# #Calculator
#
# ###Explanation
# - You will be building a calculator.  A calculator can perform multiple arithmetic operations.  Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
#
# ###Specification:
# - A user should be given a menu of operations
# - A user should be able to choose from the menu
# - A user should be able to enter numbers to perform the operation on
# - A user should be shown the result
# - This process should continue until the user selects a quit option from the menu
#
# ####Phase 1
# - Calculator functionality
# - Calculator should be able to do basic arithmetic (+,-, *, /)
#
# ####Phase 2
# - Advanced Calculator functionality
# - Calculator should be able to do basic arithmetic (exponents, square roots)
#
#
#
# # Bonus
# ## Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
#
# ## BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight
#
# ## Trip Calculator
# Calculate a trip time and cost given inputs for
# - distance
# - miles per gallon
# - price per gallon
# - speed in miles per hour
require 'complex'
include Math
require "pry"

#We create a method called menu that prints out a bunch of information. This means we can call it lots of times
def menu
  #For addition, type (a)
  puts "(a) - addition" # Makes a new line
  puts "(s) - subtract" # Makes a new line
  puts "(m) - multiple" # Makes a new line
  puts "(d) - divide" # Makes a new line
  puts "(e) - exponentiation" # Makes a new line
  puts "(r) - square root" # Makes a new line
  puts "(q) - quitting" # Makes a new line

  print "Enter your choice: " # Will allow the user to type next to it.
  gets.chomp() # Ask the user for an input, and we implicity return that

end

user_choice = menu() # Store whatever was typed as the user_choice variable

#Create an add method

def add
  # Ask for some inputs, after some text
  # Turn those inputs into a float, and saves it in some variable
  print "What is your first number? "
  first_number = gets.to_f

  print "What is your second number? "
  second_number = gets.to_f

  # Add the two inputs give together and save the result
  result = first_number + second_number

  # Print these things out to the screen
  puts "The result is #{result}"

end


# Create a subtract method
def subtract
  # Ask for some inputs, after some text
  # Turn those inputs into a float, and saves it in some variable
  print "What is your first number? "
  first_number = gets.to_f

  print "What is your second number? "
  second_number = gets.to_f

  # Add the two inputs give together and save the result
  result = first_number - second_number

  # Print these things out to the screen
  puts "The result is #{result}"

end

# Create a multiple method
def multiple
  # Ask for some inputs, after some text
  # Turn those inputs into a float, and saves it in some variable
  print "What is your first number? "
  first_number = gets.to_f

  print "What is your second number? "
  second_number = gets.to_f

  # Add the two inputs give together and save the result
  result = first_number * second_number

  # Print these things out to the screen
  puts "The result is #{result}"

end

# Create a divide method
def divide
  # Ask for some inputs, after some text
  # Turn those inputs into a float, and saves it in some variable
  print "What is your first number? "
  first_number = gets.to_f

  print "What is your second number? "
  second_number = gets.to_f

  # Add the two inputs give together and save the result
  result = first_number / second_number

  # Print these things out to the screen
  puts "The result is #{result}"

end

# Create a exponentiation method
def exponentiation
  # Ask for some inputs, after some text
  # Turn those inputs into a float, and saves it in some variable
  print "What is your base number? "
  base_number = gets.to_f

  print "What is your exponent? "
  exponent_number = gets.to_f

  # Add the two inputs give together and save the result
  result = base_number ** exponent_number

  # Print these things out to the screen
  puts "The result is #{result}"

end

# Create a square_root method
def square_root
  # Ask for some inputs, after some text
  # Turn those inputs into a float, and saves it in some variable
  print "What is number you want the square root? "
  sqr = gets.to_f

  # Add the two inputs give together and save the result
  result = sqrt(sqr)

  # Print these things out to the screen
  puts "The result is #{result}"

end

# Until the current value of the user_choice variable is equal to the string q, keep running this series of code

until user_choice == "q"
  # I compare a bunch of stuff with the variable user_choice
  case user_choice
  # In the case that user_choice was "a", call the add method
  when "a" then add()
  # In the case that user_choice was "s", call the subtract method
  when "s" then subtract()
  # In the case that user_choice was "m" call the multiple method
  when "m" then multiple()
  # In the case that user_choice was "d" call the divide method
  when "d" then divide()
  # In the case that user_choice was "e" call the exponentiation method
  when "e" then exponentiation()
  # In the case that user_choice was "r" call the square_root method
  when "r" then square_root()
  # Otherwise, print out an offensive method
  else
    puts "Invalid selection, dingus."
  end
  # Store the new user_choice using the implicit return from the menu method
  # If the new user_choice is "q", this loop won't run again
  user_choice = menu()

end

puts "Thanks for using our lovely calculator! See $ and \u2764"

# [1] pry(main)> 2 ** 19
# => 524288
