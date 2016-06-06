require( 'pry' )

# this method gives us info. We can call it many times:
def menu
  puts "(a) - addition" # makes a new line
  puts "(s) - substraction" # makes a new line
  puts "(m) - multiplication" # makes a new line
  puts "(d) - division" # makes a new line
  puts "(e) - exponent" # makes a new line
  puts "(sq) - square root" # makes a new line
  puts "(trip) - trip calculator" # makes a new line
  puts "(q) - quitting" # makes a new line
  print "Enter your choice: " # will allow the user to type next to it
  # the last line of a function is always returned by ruby:
  gets.chomp()
end

user_choice = menu() # store menu() last line

# the debuggger for ruby is: binding.pry

def add
  print "What is the first number? "
  first_number = gets.to_f

  print "What is the second number? "
  second_number = gets.to_f

  result = first_number + second_number

  puts "The results is #{result}."
end

def sub
  print "What is the first number? "
  first_number = gets.to_f

  print "What is the second number? "
  second_number = gets.to_f

  result = first_number - second_number

  puts "The results is #{result}."
end

def mul
  print "What is the first number? "
  first_number = gets.to_f

  print "What is the second number? "
  second_number = gets.to_f

  result = first_number * second_number

  puts "The results is #{result}."
end

def div
  print "What is the first number? "
  first_number = gets.to_f

  print "What is the second number? "
  second_number = gets.to_f

  result = first_number / second_number

  puts "The results is #{result}."
end

def exp
  print "What is the first number? "
  first_number = gets.to_f

  print "What is the second number? "
  second_number = gets.to_f

  result = first_number ** second_number

  puts "The results is #{result}."
end

def sqr
  print "What is the first number? "
  first_number = gets.to_f

  result = Math.sqrt(first_number)

  puts "The results is #{result}."
end

# Calculate a trip time and cost given inputs for
#
# distance
# miles per gallon
# price per gallon
# speed in miles per hour

def trip
  print "What is the distance? "
  distance = gets.to_f

  print "Price per gallon? "
  price_per_gallon = gets.to_f

  print "Speed in miles/hour? "
  speed = gets.to_f


  if speed > 50
    miles_per_gallon = 10
  else
    miles_per_gallon = 12
  end

  # price_per_mile = price_per_gallon * price_per_mile
  gallon_quantity = distance / miles_per_gallon
  final_price = price_per_gallon * gallon_quantity



  result = final_price

  puts "The results is #{result}."
end


until user_choice == "q"
  case user_choice
  when "a" then add()
  when "s" then sub()
  when "m" then mul()
  when "d" then div()
  when "e" then exp()
  when "sq" then sqr()
  when "trip" then trip()
  else
    puts "Invalid selection, dingus"
  end
  # Store the new user_choice using the implicit return from the menu method
  # If the new user_choice is "q", this loop wont run again
  user_choice = menu()
end

# This will only run if the loop is finished
puts "Thank you for using our lovely calculator!"



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
