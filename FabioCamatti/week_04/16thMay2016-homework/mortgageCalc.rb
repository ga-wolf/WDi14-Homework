# ## Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)

require 'complex'
include Math
require "pry"

#We create a method called menu that prints out a bunch of information. This means we can call it lots of times
def menu
  #For addition, type (a)
  puts "(m) - mortage" # Makes a new line
  puts "(q) - quitting" # Makes a new line

  print "Enter your choice: " # Will allow the user to type next to it.
  gets.chomp() # Ask the user for an input, and we implicity return that

end

user_choice = menu() # Store whatever was typed as the user_choice variable

#Create an mortage method

#In C
// Write a procedural C++ program that calculates and displays the mortgage payment
//amount given the amount of the mortgage, the term of the mortgage, and the interest rate of the mortgage.
//In this program, hard code
//the amount = $200,000
//the term = 30 years
//the interest rate = 5.75%.
//Insert comments in the program to document the program.

#include "stdafx.h"
#include "math.h"
#include <iostream>
#using <mscorlib.dll>
# using namespace System;
#
# int main()
# {
# 	int a = 200000; //amount of the loan
# 	double i = .00575; // the losn interest rate
# 	int y = 30; //years of the loan
# 	int t = y*12; //loan term in months
# 	int mPayment; //variable for ouputting the payment
#
# 	mPayment = (a * i) / (1 - pow(1+i,-t)); //Formula to figure mortgage payment amount
#
# 	printf( "Your Monthly Payment Amount is: $ %i\n", mPayment);  //prints out montyly payment amount
#
# 	return 0;
# }
#
# In C#
# private static void Main()
# {
#     double years = GetDoubleFromUser("Enter the duration of the loan (in years): ");
#     double principal = GetDoubleFromUser("Enter the princple ammount: ");
#     double rate = GetDoubleFromUser("Enter the interest rate: ") / 100;
#
#     Console.WriteLine("\nBased on these values entered:");
#     Console.WriteLine(" - Number of years .... {0}", years);
#     Console.WriteLine(" - Principal amount ... {0:c}", principal);
#     Console.WriteLine(" - Interest rate ...... {0:p}", rate);
#
#     double monthlyRate = rate / 12;
#     double payments = 12 * years;
#
#     double result =
#         principal *
#         (monthlyRate * Math.Pow(1 + monthlyRate, payments)) /
#         (Math.Pow(1 + monthlyRate, payments) - 1);
#
#     Console.WriteLine("\nYour monthly payment will be: {0:c}", result);
#     Console.ReadLine();
# }

def mortage
  # Ask for some inputs, after some text
  # Turn those inputs into a float, and saves it in some variable
  print "What is the principal? "
  principal = gets.to_f

  print "What is the monthly interest rate? "
  interest_rate = gets.to_f

  print "What is the number of installments? "
  installments = gets.to_f

  # Add the two inputs give together and save the result
  result = first_number + second_number

  # Print these things out to the screen
  puts "The result is #{result}"

end


# Until the current value of the user_choice variable is equal to the string q, keep running this series of code

until user_choice == "q"
  # I compare a bunch of stuff with the variable user_choice
  case user_choice
  # In the case that user_choice was "m", call the mortage method
  when "m" then mortage()

  # Otherwise, print out an offensive method
  else
    puts "Invalid selection, dingus."
  end
  # Store the new user_choice using the implicit return from the menu method
  # If the new user_choice is "q", this loop won't run again
  user_choice = menu()

end

puts "Thanks for using our lovely mortage calculator! See $ and \u2764"

# [1] pry(main)> 2 ** 19
# => 524288
