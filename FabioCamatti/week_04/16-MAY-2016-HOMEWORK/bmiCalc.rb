# ## BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight

require 'complex'
include Math
require "pry"

def menu
  #For addition, type (a)
  puts "(b) - Calculates BMI" # Makes a new line
  puts "(q) - quitting" # Makes a new line

  print "Enter your choice: " # Will allow the user to type next to it.
  gets.chomp() # Ask the user for an input, and we implicity return that

end

user_choice = menu() # Store whatever was typed as the user_choice variable

def add
  # Ask for some inputs, after some text
  # Turn those inputs into a float, and saves it in some variable
  print "What is your mass ? "
  mass = gets.to_f

  print "What is your height ? "
  height = gets.to_f

  # Add the two inputs give together and save the result
  result = mass / (height**height )

  # Print these things out to the screen
  puts "The result is #{result}"

end


# Until the current value of the user_choice variable is equal to the string q, keep running this series of code

until user_choice == "q"
  # I compare a bunch of stuff with the variable user_choice
  case user_choice
  # In the case that user_choice was "a", call the add method
  when "b" then add()
  # Otherwise, print out an offensive method
  else
    puts "Invalid selection, dingus."
  end
  # Store the new user_choice using the implicit return from the menu method
  # If the new user_choice is "q", this loop won't run again
  user_choice = menu()

end

puts "Thanks for using our lovely calculator! See $ and \u2764"
