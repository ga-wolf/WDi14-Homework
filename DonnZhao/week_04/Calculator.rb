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
#
require 'pry'

def menu
  puts "(a) - addition"  #makes new line
  puts "(q) - quitting"
  print "enter your choice" # will allow the user to type next to it
  gets.chomp() # ask the user for an input, and implicity return that

end

user_choice = menu() # stroe what everwas typed as the user_choice variale

p user_choice
#
# keep running the menu until the choice that user made is qual to
#  the string q


# create and add method
def add
# ask for some input , after the text
#turn those input into a float . and saves it in some variable
  print 'what is your first number?'
  first_number = gets.to_f
  print 'what is your second number?'
  second_number = gets.to_f

  # add the two inputs given together and save result
  result = first_number + second_number

# pritn these things out
  puts "The result is #{result}"
end



# until the current value of the user_choice varible is equal to te
# string q . keep running this seris
 until user_choice == 'q'
   case user_choice
   when 'a' then puts 'Times to add'
     add()
   else
     puts 'Invalid selection'
   end
  user_choice = menu()

  binding.pry
end
puts "Thanks for using our lovely Calculator"
