require("pry")
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu

# we create a method call menu that prints out a bunch of information. this means we can call it alot of time
def menu
  puts "(a) - addition" # makes a new line
  puts "(b) - subtration"
  puts "(c) - multiplication"
  puts "(d) - division"
  puts "(e) - exponential"
  puts "(f) - square root"
  puts "(g) - mortgage repayment calculator"
  puts "(h) - BMI calculator"
  puts "(i) - trip calculator"
  puts "(p) - quitting" # also makes a new line
  print "Enter your choice: " # this will allow a user to type next to it
  gets.chomp() # request input from user and we implicity return that
end

user_choice = menu() # Store whatever was typed as the user_choice variable


#create an add method
def add
#ask for soem inputs
#turn those inputs into float, and saves it in osme variable
  print "Whats your first number: "
  first_number = gets.to_f
  print "Whats your second number: "
  second_number = gets.to_f

#add two inputs given together and save teh results
  result = first_number + second_number

#print these things out to the screen
  puts "The result is #{result}"
end

def subtract
  print "Whats your first number: "
  first_number = gets.to_f
  print "Whats your second number: "
  second_number = gets.to_f

  result = first_number - second_number
  puts "The result is #{result}"
end

def multiply
  print "Whats your first number: "
  first_number = gets.to_f
  print "Whats your second number: "
  second_number = gets.to_f

  result = first_number * second_number
  puts "The result is #{result}"
end

def divide
  print "Whats your first number: "
  first_number = gets.to_f
  print "Whats your second number: "
  second_number = gets.to_f

  result = first_number / second_number
  puts "The result is #{result}"
end

def exp
  print "Whats your number: "
  first_number = gets.to_f
  print "to the power of? "
  second_number = gets.to_f

  result = first_number ** second_number
  puts "The result is #{result}"
end

def root
  print "square root of which number:  "
  first_number = gets.to_f

  result =  Math.sqrt(first_number)
  puts "The result is #{result}"
end

def mortgage
  print "What is the principle amount: "
  principle = gets.to_f
  print "What is the average interest rate: "
  interest = gets.to_f / 100
  print "What is the term of your mortgage in years: "
  years = gets.to_i


  total = principle*((1 + interest / 12) ** years)
  repayments = total / (years * 12)

  puts "your total mortgage payable over #{years}, at an interest rate of #{(interest * 100)}% is equal to $#{total.round}."
  puts "your monthly repayment is equal to $#{repayments.round}."
end


def bmi
  print "What is your weight in Kilograms: "
  user_weight = gets.to_i
  print "what is your height in meters: "
  user_height = gets.to_f

  user_bmi = user_weight / (user_height ** 2)
  puts "your BMI is #{user_bmi.round}"
end

def trip
  print "How many miles are you travelling: "
  distance = gets.to_i
  print "How many miles per gallon does your car make: "
  milage = gets.to_f
  print "What is the price per gallon: "
  price = gets.to_f
  print "Average speed in MPH: "
  speed = gets.to_f

  time = distance / speed
  puts "trip time will be #{time} hour"
  cost = distance / milage * price
  puts "cost will be $#{cost}"

end

#until the current value of the user_choice variable is equal to the string q, keep running this series of code
until user_choice == "q"

#i compare a bunch of stuff with the variable user choice
  case user_choice
    #in the case that the user_choice was "a" call the add method
  when "a" then add()
  when "b" then subtract()
  when "c" then multiply()
  when "d" then divide()
  when "e" then exp()
  when "f" then root()
  when "g" then mortgage()
  when "h" then bmi()
  when "i" then trip()
    #otherwise print out an offensive method
  else
    puts "Invalid selection, dingus"
  end
#store the new user_choice using the implicit return from the menu method
# if the new user_choice is "q" this loop wont run again
  user_choice = menu()
end

#this will only run once the loop finishes
puts "Thanks for using our calculator"
