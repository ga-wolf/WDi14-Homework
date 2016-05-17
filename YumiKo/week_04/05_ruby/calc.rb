
require 'pry'
# require( 'pry' )


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


#We create a method called menu that prints out a bunch of information. This means we can call it lots of times


def menu
  puts "(a) - addition" # Makes a new line
  puts "(d) - divide"
  puts "(e) - exponents"
  puts "(m) - multiply"
  puts "(q) - quitting" # Makes a new line
  puts "(s) - substracting"
  puts "(sq) - square roots"
  print "Enter your choice: " # Will allow the user to type next to it
  gets.chomp() # Ask the user for an input, and we implicitly return that
end

user_choice = menu() # Store whatever was typed as the user_choice variable





# p user_choice

#Create an add method
def add
  # Ask for some inputs, after some text
  # Turn those inputs into a float, and saves it in some variable
  print "What is your first number?"
  first_number = gets.to_f

  print "What is your second number?"
  second_number = gets.to_f

  # Print these things out to the screen

  # binding.pry

  result = first_number + second_number

  puts "The result is #{result}"
end


def substract
  print "What is your first number?"
  first_number = gets.to_f

  print "What is your second number?"
  second_number = gets.to_f

  result = first_number - second_number

  puts "The result is #{result}"
end

def multiply
  print "What is your first number?"
  first_number = gets.to_f

  print "What is your second number?"
  second_number = gets.to_f

  result = first_number * second_number

  puts "The result is #{result}"
end

def divide
  print "What is your first number?"
  first_number = gets.to_f

  print "What is your second number?"
  second_number = gets.to_f

  result = first_number/second_number

  puts "The result is #{result}"
end


def exponents
  print "What is your first number?"
  first_number = gets.to_f

  print "What is your second number?"
  second_number = gets.to_f

  result = first_number ** second_number

  puts "The result is #{result}"
end


def square_roots
  print "What is your number?"
  number = gets.to_f

  result = Math.sqrt(number)

  puts "The result is #{result}"
end



# Until the current value of the user_choice variable is equal to the string q, keep running this series of code
until user_choice == "q"
  # I compare a bunch of stuff with the variable user_choice
  case user_choice

  # In the case that user_choice was "a", call the add method
  when "a" then add()
  when "d" then divide()
  when "e" then exponents()
  when "m" then multiply()
  when "s" then substract()
  when "sq" then square_roots()

  # Otherwise, print out an offensive method
  else
    puts "Invalid selection, dingus."
  end
  # Store the new user_choice using the implicit return from the menu method
  # If the new user_choice is "q", this loop won't run again
  user_choice = menu()
end

# This will only run after our loop has stopped
puts "Thanks for using our lovely calculator!"



# Keep running the menu until the choice that the user made is equal to the string q




# For addition, type (a)
# To quit, type (q)
