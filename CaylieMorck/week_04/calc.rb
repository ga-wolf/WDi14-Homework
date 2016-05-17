# Specification:
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu

def menu
  puts "(a) - addition "
  puts "(q) - quitting "
  puts "(m) - multiplication "
  puts "(d) - division "
  puts "(s) - Square Root "
  puts "(e) - exponents "
  print "Enter your choice: "
  gets.chomp()
end

user_choice = menu()

def add
  print "What is your first number? "
  first_number = gets.to_f

  print "What is your second number? "
  second_number = gets.to_f

  result = first_number + second_number
  puts "The result is #{result}"
end

def subtraction
  print "What number would you like to subract from? "
  first_number = gets.to_f

  print "What number would you like to subtract? "
  second_number = gets.to_f

  result = first_number - second_number
  puts "The result is #{result}"

def division
  print "What's your numerator? "
  first_number = gets.to_f

  print "What's your demoninator? "
  second_number = gets.to_f

  result = first_number / second_number
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

def square_root
  print "What number do you want to find the square root of?"
  first_number = gets.to_f

  result = math.sqrt(first_number)
  puts "The square root of #{first_number} is #{result}"
end

def exponent
  print "What number would like as your base? "
  first_number = gets.to_f

  print "To what power would you like to multiply that too? "
  second_number = gets.to_f

  result = first_number ** second_number
  puts "Your answer is #{result}"
end

until user_choice == "q"

  case user_choice
  when "a" then add()
  when "m" then multiply()
  when "d" then divide()
  when "s" then square_root()
  when "a" then exponent()
  when "q" then puts "You are quitting the calculator "
  else
    puts "Invalid selection, dingus. "
  end

  user_choice = menu()
end

puts "Thanks for using our lovely calculator!"
