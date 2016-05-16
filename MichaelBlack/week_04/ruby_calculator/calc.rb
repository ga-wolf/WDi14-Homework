# Specification:
#
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu
require( 'pry' )

# create method called menu which prints information. This means we can call it many times.
def menu
  puts "(a) - Addition" #puts makes new line at end...
  puts "(d) - Division"
  puts "(m) - Multiplication"
  puts "(r) - Square Root"
  puts "(s) - Subtration"
  puts "(x) - Exponent"
  puts "(q) - Quit"
  print "Choose wisely: " #print does not make new line at end...
  gets().chomp().downcase() #Ask user for input. value of this line (last line) is returned ..Implicit return..
end
user_select = menu() #call menu method and store returned input in variable

#create 'add' method
def add
  #prints line and gets inputs, saved in variables (.to_i = convert input to int.)
  print "What is the first number? "
  first_num = gets().to_f

  print "What is the second number? "
  second_num = gets().to_f

  result = first_num + second_num #add variables and store in result

  puts "The result is #{result}" #print result with new line
  puts "" #extra space
end

def division

  print "What is the first number? "
  first_num = gets().to_f

  print "What is the second number? "
  second_num = gets().to_f

  result = first_num / second_num

  puts "The result is #{result}"
  puts ""
end

def multiplication

  print "What is the first number? "
  first_num = gets().to_f

  print "What is the second number? "
  second_num = gets().to_f

  result = first_num * second_num

  puts "The result is #{result}"
  puts ""
end

def subtraction

  print "What is the first number? "
  first_num = gets().to_f

  print "What is the second number? "
  second_num = gets().to_f

  result = first_num - second_num

  puts "The result is #{result}"
  puts ""
end

def exponent

  print "What is the base number? "
  base_num = gets().to_f

  print "What is the exponent? "
  ex_num = gets().to_f

  result = base_num ** ex_num

  puts "The result is #{result}"
  puts ""
end

def sqrt
  print "What number do you want the square root of? "
  num = gets().to_i

  result = Math.sqrt(num)
  puts "The result is #{result}"
  puts ""
end

# Keep running menu until the choice returned by user == "q"
until user_select == "q"
  #compare menu options against user selection
  case user_select
  when "a" then add() #if a, call add method
  when "d" then division()
  when "m" then multiplication()
  when "r" then sqrt()
  when "s" then subtraction()
  when "x" then exponent()
  else #defult, print invalid selection
    puts "Invalid selection"
  end

  #call menu again and store new user choice from the implicit return.
  user_select = menu()
end

puts "Thank you, Don't come again."
