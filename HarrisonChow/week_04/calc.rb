
# require('pry')
# binding.pry

#we create a method called menu that prints out a bunch of information. this means we can call it lots of times
def menu
  puts "(a) - addition"  #makes a new line
  puts "(s) - subtraction" #makes a new line
  puts "(q) - quitting"  #makes a new line
  puts "(m) - multiplication"
  puts "(d) - division"
  puts "(e) - exponent"
  puts "(r) - square_roots"
  puts "(mc) - Mortgage_Calculator"
  puts "(b) - BMI_Calculator"
  puts "(t) - trip_calculator"

  print "Enter your choice: " #will allow the user to type next to it
  gets.chomp() #ask the user for an input, and we implictly return that
end

user_choice = menu() #store whatever was typed as the user_choice variable

#create an add method
def add
  #ask for some inputs , after some text
  #turn those inputs into a float, and save it in some variable
  print "what is your first number? "
  first_number = gets.to_f
  print "what is your second number? "
  second_number = gets.to_f
  # Add the two inputs given togrther and save the result
  result = first_number + second_number
  #print
  puts "The result is #{result}"
end

def subtraction
  print "what is your first number? "
  first_number = gets.to_f
  print "what is your second number? "
  second_number = gets.to_f
  result = first_number - second_number
  puts "The result is #{result}"
end

def multiplication
  print "what is your first number? "
  first_number = gets.to_f
  print "what is your second number? "
  second_number = gets.to_f
  result = first_number * second_number
  puts "The result is #{result}"
end

def division
  print "what is your first number? "
  first_number = gets.to_f
  print "what is your second number? "
  second_number = gets.to_f
  result = first_number / second_number
  puts "The result is #{result}"
end


def exponent
  print "what is number? "
  first_number = gets.to_f
  print "what is the power number? "
  power_number = gets.to_f
  result = first_number ** power_number
  puts "The result is #{result}"
end

def square_roots
  print "what is number? "
  first_number = gets.to_f
  result = Math.sqrt(first_number)
  puts "The result is #{result}"
end

def mortgage_calculator()
  print "Please input your interest rate? (4.5% please input 0.045) "
  rate = gets.to_f
  print "Please input your principal: "
  principal = gets.to_f
  print "Please input the years: "
  year = gets.to_f
  r =rate/12
  n = year*12
  result=principal*((1+r)**n)*r/((1+r)**n-1)
  puts "The result is #{result}"

end

def bmi
  print "Please Input your weight (kg): "
  weight_number = gets.to_f
  print "Please Input your height (m) : "
  height_number = gets.to_f
  result = weight_number/(height_number*height_number)
  puts "The result is #{result}"
end

def trip_calculator
  print "Please Input your trip distance (km): "
  distance = gets.to_f
  print "Please Input miles per gallon (km) : "
  miles_gallon = gets.to_f
  print "Please Input price per gallon : "
  price_gallon = gets.to_f
  print "Please Input speed per hour : "
  speed_number = gets.to_f
  trip_time = distance / speed_number
  cost = distance/miles_gallon*price_gallon
  puts "For this situation you travel will use #{trip_time} hours, and cost you #{cost} dollars."
end

# keep running the menu until the choice that the user made is equal to the string q

until user_choice =="q"
  #I compare a bunch of stuff with the variable user_choice
  case user_choice
    #in the case that user_choice was "a", call the add method
  when "a" then add()
  when "s" then subtraction()
  when "m" then multiplication()
  when "d" then division()
  when "e" then exponent()
  when "r" then square_roots()
  when "mc" then mortgage_calculator()
  when "b" then bmi()
  when "t" then trip_calculator()
    #otherwise, print out an offensice method
  else
    puts "Invalid selection, dingus."
  end
  #Store the new user_choice using the implicit return from the menu method
  #if the new user_choice is "q", this loop won't run again
  user_choice = menu()
end

#this will only run after our loop has stopped
puts "Thanks for using our lovely calculator! Send $ and \u2764 凸(｀0´)凸"
