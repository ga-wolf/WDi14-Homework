# require 'pry'

# binding.pry to use debugger

# Calculator
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
# Mortgage Calculator
#
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
#
# BMI Calculator
#
# Calculate the body mass index (BMI) for an individual, given their height and weight
#
# Trip Calculator
#
# Calculate a trip time and cost given inputs for
#
# distance
# miles per gallon
# price per gallon
# speed in miles per hour

# for addition, type (a)
# to quit, type (q)

def menu

  puts "(a) - addition"
  puts "(s) - subtraction"
  puts "(m) - multiplication"
  puts "(d) - division"
  puts "(e) - exponent"
  puts "(r) - square root"
  puts "(q) - quitting"
  puts "(mo) - Mortage"
  puts "(b) - BMI"
  puts "(t) - Trip"

  print "Enter your choice. "
  gets().chomp()

end

user_choice = menu()

def addition

  print "What is your first number? "
  first_num = gets.to_i
  print "What is your second number? "
  second_num = gets.to_i

  result = first_num + second_num

  puts "The result is #{result}"

end

def subtraction

  print "What is your first number? "
  first_num = gets.to_i
  print "What is your second number? "
  second_num = gets.to_i

  result = first_num - second_num

  puts "The result is #{result}"

end

def multiplication

  print "What is your first number? "
  first_num = gets.to_i
  print "What is your second number? "
  second_num = gets.to_i

  result = first_num * second_num

  puts "The result is #{result}"

end

def division

  print "What is your first number? "
  first_num = gets.to_i
  print "What is your second number? "
  second_num = gets.to_i

  result = first_num / second_num

  puts "The result is #{result}"

end

def exponent

  print "What is your number? "
  first_num = gets.to_i

  print "What is your exponent? "
  second_num = gets.to_i
  result = first_num ** second_num

  puts "The result is #{result}"

end

def square_root

  print "What is your number? "
  first_num = gets.to_i

  result = Math.sqrt(first_num)

  puts "The result is #{result}"

end

def mortgage

  print "How much are you borrowing? "
  first_num = gets.to_f

  print "Over how many years? "
  second_num = gets.to_f

  print "What % interest? "
  third_num = gets.to_f

  result = first_num * ((1 + (third_num / 100) / 12)** second_num)

  puts "You are paying $#{result} interest over #{second_num} years."

end

def bmi

  print "How tall are you in meters? "
  first_num = gets.to_f

  print "How much do you weigh? "
  second_num = gets.to_f

  result = second_num / (first_num * first_num)

  puts "Your BMI is #{result}, congrats!"

end

def trip

  # Calculate a trip time and cost given inputs for
  #
  # distance
  # miles per gallon
  # price per gallon
  # speed in miles per hour

  print "How far are you going in kms? "
  distance = gets.to_f

  print "How many kms per litre do you get? "
  kms_per_litre = gets.to_f

  print "How much is petrol per litre in cents? "
  price_per_litre = gets.to_f

  print "How fast will you be going in kms/h? "
  speed = gets.to_f

  time = distance / speed

  cost = distance / kms_per_litre * price_per_litre

  puts "It will take you #{time} hour to get to your destination and cost $#{cost}."

end

until user_choice == "q"

  case user_choice
  when "a" then addition()
  when "s" then subtraction()
  when "m" then multiplication()
  when "d" then division()
  when "e" then exponent()
  when "r" then square_root()
  when "mo" then mortgage()
  when "b" then bmi()
  when "t" then trip()
  else
    puts "Invalid Selection, dingus"
  end
  user_choice = menu()

end

puts "Thanks for using our lovely calculator!"
