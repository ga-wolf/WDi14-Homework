# Calculator
# Explanation
#
# You will be building a calculator.
# A calculator can perform multiple arithmetic operations.
#Your function should allow the user to choose which operation is expected,
#enter in the values to perform the operation on,
#and ultimately view the result.
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
#
# require 'pry'

def menu
 puts "(a) - addition"  #makes new line
 puts "(s) - subtract"
 puts "(m) - multiple"
 puts "(d) - divide"
 puts "(q) - quitting"
 puts "(sqrt) - square"
 puts "(ex) - exponents"
 print "enter your choice" # will allow the user to type next to it
 gets.chomp() # ask the user for an input, and implicity return that

end

user_choice = menu() # stroe what everwas typed as the user_choice variale

p user_choice

def add
 print 'what is your first number?'
 first_number = gets.to_f
 print 'what is your second number?'
 second_number = gets.to_f

 result = first_number + second_number

 puts "The result is #{result}"

end


def sub
  print 'what is your first number?'
  first_number = gets.to_f
  print 'what is your second number?'
  second_number = gets.to_f

  result = first_number - second_number

  puts "The result is #{result}"

end

def mul
  print 'what is your first number?'
  first_number = gets.to_f
  print 'what is your second number?'
  second_number = gets.to_f

  result = first_number * second_number

  puts "The result is #{result}"

end

def div
  print 'what is your first number?'
  first_number = gets.to_f
  print 'what is your second number?'
  second_number = gets.to_f

  result = first_number / second_number

  puts "The result is #{result}"
end

def sqrt
  print 'what is your number for squareroot?'
  first_number = gets.to_f


  result = Math.sqrt(first_number)

  puts "The result is #{result}"
end

def exponents
  print 'what is your first number?'
  first_number = gets.to_f
  print 'what is your exponents?'
  second_number = gets.to_i

  result = first_number ** second_number

  puts "The result is #{result}"
end




until user_choice == 'q'
  case user_choice
  when 'a' then puts 'Times to add'
    add()
  when 's' then puts 'Times to subtract'
    sub()
  when 'm' then puts 'Times to multiple'
    mul()
  when 'd' then puts 'Times to divide'
    div()
  when 'sqrt' then puts 'Times to square'
    sqrt()
  when 'ex' then puts 'Times to exponents'
    exponents()
  else
    puts 'Invalid selection'
  end
 user_choice = menu()

 # binding.pry
end
puts "Thanks for using our lovely Calculator"
