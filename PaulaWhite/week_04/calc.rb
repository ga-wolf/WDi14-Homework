# Specification:
#
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu

# we create a method called menu that prints out a bunch of information. This means
#we can call it lots of times
def menu
  puts "(a) - addition" # make a new line
  puts "(s) - subtraction"
  puts "(d) - division"
  puts "(m) - multiply"
  puts "(sr) - square_root"
  puts "(ex) - exponent"
  puts "(bmi) - BMI"
  puts "(trp) - Trip"
  puts "(mo) - Mortage"
  puts "(q) - quitting"
  print "Enter your choice: " #allow user to type next to it
  return gets.chomp() # ask the user for an input, and we implicity return that
end

user_choice = menu()# Store whatever was tyoed as the user_choice variable

# Create an add method
def add
  # Ask for some inputs, after some text
  # Turn those inputs into a float, and saved it in some variable
  print "What is your first number? "
  first_number = gets().to_f

  print "What is your second number? "
  second_number = gets().to_f

# Add the two inputs given together and save the result
  result = first_number + second_number

# Print these things out to the screen
  puts "The result is #{result}"
end

def subtract
  print "What is your first number? "
  first_number = gets().to_f

  print "What is your second number? "
  second_number = gets().to_f

  result = first_number - second_number
  puts "The result is #{result}"
end

def divide
  print "What is your first number? "
  first_number = gets().to_f

  print "What is your second number? "
  second_number = gets().to_f

  result = first_number / second_number
  puts "The result is #{result}"
end

def multiply
  print "What is your first number? "
  first_number = gets().to_f

  print "What is your second number? "
  second_number = gets().to_f

  result = first_number * second_number
  puts "The result is #{result}"
end

def exponent
  print "What is your first number? "
  first_number = gets().to_f

  print "What is your second number? "
  second_number = gets().to_f

  result = first_number ** second_number
  puts "The result is #{result}"
end

def square_root
  print "What is your number? "
  number = gets().to_f
  result =  math.sqrt(number)
  puts "The square root is #{result}"
end
#BONUS
def bmi
  print "What is your weight (kgs)? "
  weight = gets().to_i

  print "What is your height (m)? "
  height = gets().to_i

  #result = (weight / height) / height
  result = (weight/height)/height #not working
  puts "Your Body Mass Index is #{result}"
end

def mortage #not complete
  print "I would like to borrow? "
  loan = gets().to_i

  print "Over how many months? "
  years = gets().to_i

  print "What is the interest rate? "
  interest = gets().to_f #r

  #result = 
  puts "Your monthly required payment is #{result}"
end

def trip
  print "What is your distance?"
  distance = gets().to_i
  print "What is the price per gallon?"
  price = gets().to_i
  print "How many miles per gallon?"
  miles = gets().to_i
  print "What is your average speed per hour?" #need to get avg speed per hour
  speed = gets().to_i

  result_1 = distance / speed
  result_2 =
  print "Your Trip Time should be#{result_1}, and your trip cost is #{result_2}"
end


# Distance = Speed × Time
# Speed = Distance / Time
# Time = Distance / Speed










# Until the current value of the user_choice varfiable is equal to the string q,
#keep running this series of code

until user_choice == "q"

# I compare a bunch of stuff with the variable user_choice
  case user_choice
# In the case that user_choice was "a", call the add method
  when "a" then add()
  when "s" then subtract()
  when "m" then multiply()
  when "d" then divide()
  when "sq" then square_root()
  when "ex" then exponent()
  when "bmi" then bmi()
  when "mo" then mortage()
  when "trp" then trip()
  # Otherwise, print out an offensive method
  # when "d" then divide() puts "Time to divide"
  # when "m" then multiply()puts "Time to multiply"
  # when "s" then subtract() puts "Time to subtract"
  else
    puts "Invalid selection, dingus."
  end
# Store the new user_choice using the implicit return from the menu method
# If the new user_choice is "q", this loop won't run again
 user_choice = menu()
end

# This will only run after our loop has stopped
puts "Thanks for using our lovely calculator! \u2764 \u2764 \u2764"
