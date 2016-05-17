# Specification:
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu


# create a method called menu, that prints out a bunch of information. This means we can call it a bunch of times.
def menu
  puts "(a) - addition " #makes new line
  puts "(q) - quitting " #makes new line
  puts "(m) - multiplication "
  puts "(d) - division "
  print "Enter your choice: " #Will allow user to type next to it
  gets.chomp() # Ask the user for an input, and we implicitly return that
end

user_choice = menu() #Store whatever was typed as the user_choice variable

#create an add method
def add
  #Ask for inputs, after showing some texts.
  #Turn those inputs into a float, and saves it in some variable.
  print "What is your first number? "
  first_number = gets.to_f

  print "What is your second number? "
  second_number = gets.to_f

  #Addthe two inputs given together and save the result
  result = first_number + second_number

  #Print these things out to the screen
  puts "The result is #{result}"
end

def multiply
  puts "In the multiplication method"
end

# Until the current value of the user_choice variable is equal to the string q, keep running this series of code.
until user_choice == "q"

  #I compare a bunch of stuff with the variable user_choice
  case user_choice
  #In the case that use_choice was "a", called the add method etc. etc. Otherwise, print out an offensive method (else aspect)
  when "a" then add()
  when "m" then multiply()
  when "d" then divide()
  when "q" then puts "You are quitting the calculator "
  else
    puts "Invalid selection, dingus. "
  end

  #Store the new user_choice using the implicit return from the menu method
  #If the new user_choice is "q", this loop won't run again.
  user_choice = menu()
end

#This will only run after our loop has stopped
puts "Thanks for using our lovely calculator!"
