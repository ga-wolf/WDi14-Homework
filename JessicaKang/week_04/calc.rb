# Specification:
#
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu


# we create a method called menu that prints out a bunch of information. This means we can call it lots of time.
def menu
  puts "(a) - addition"
  puts "(s) - subtraction"
  puts "(m) - multiplication"
  puts "(d) - division"
  puts "(e) - exponents" # makes a new line
  puts "(sq) - squareroot"
  puts "(q) - quitting" # makes a new line
  print "Enter your choice: " # allows user to type next to it
  gets.chomp() # ask user for input and we implicitly return that.
end

user_choice = menu() # store whatever was typed as the user_choice

# create an add method
def add
  # ask for some inputs, after some text.
  # turn those inputs into a float, and saves it in some variable.
  print "What is your first number?"
  first_number = gets.to_f

  print "What is your second number?"
  second_number = gets.to_f

  # add the two inputs given together and save the result.
  result = first_number + second_number

  # Print these things out ot the screen
  puts "The result is #{result}"
end

def subtract

  print "What is your first number?"
  first_number = gets.to_f

  print "What is your second number?"
  second_number = gets.to_f

  result = first_number - second_number

  puts "The results is #{result}"
end

def multiply

  print "What is your first number?"
  first_number = gets.to_f

  print "What is your second number?"
  second_number = gets.to_f

  result = first_number * second_number

  puts "The results is #{result}"
end

def divide

  print "What is your first number?"
  first_number = gets.to_f

  print "What is your second number?"
  second_number = gets.to_f

  result = (first_number) / (second_number)

  puts "The results is #{result}"
end

def exponent

  print "What is your first number?"
  first_number = gets.to_f

  print "What is your second number?"
  second_number = gets.to_f

  result = first_number ** second_number

  puts "The results is #{result}"
end

def square

  print "What is your number?"
  number = gets.to_f

  result = Math.sqrt(number)

  puts "The results is #{result}"
end

# Keep running the menu until the choice that the user made is equal to the string q
until user_choice == "q"

  case user_choice
  when "a" then add()
  when "s" then subtract()
  when "m" then multiply()
  when "d" then divide()
  when "e" then exponent()
  when "sq" then square()
  else
    puts "Invalid selection, poophead."
  end

  user_choice = menu()
end

# For addition, type (a)
# To quit, type (q)
