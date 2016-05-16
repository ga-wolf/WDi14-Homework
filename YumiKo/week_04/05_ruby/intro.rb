# my_name = "Gilberto"
# food = "Greek Lasagna"

# print "What is your name?"
#
# my_name = gets().chomp()
#
# print "What is your favourite food?"
#
# food = gets.chomp
#
#
# message = "Hello, I'm #{my_name} and I like #{food}"
#
# # Puts will bring to the screen and create a new line
#
#
#
# puts ( message )
# puts message
#
#
# # Print will print to the screen, on the same line
#
#
# print( message )
# print message
#
#
# # Programmer print, shows us the data type
#
#
# p( message )
# p message


# some_information = gets()
# puts some_information

#
#
# if 42 > 13
#   puts "42 is a bigger number"
# end
#
#
# my_name = "Roger"
#
# if my_name == "Roger"
#   puts "Is it really?"
# elsif my_name == "Bill"
#   puts "You're probably a genius"
# else
#   puts "Well then, it isn't Roger or Bill"
# end
#
#
# puts "Is it really? " if my_name == "Roger"
#
#
# num = 2
# if num <=1
#   puts "Less then or equal to 1"
# end
#
# unless num > 1
#   puts "Less then or equal to 1"
#
# end
#
#
# ready_to_print = false
# if !ready_to_print
#   puts "Wait a while"
# end
#
#
# unless ready_to_print
#   puts "Wait a while"
# end
#
#
# errors = true
#
# if !errors
#   puts "All good"
# end
#
# unless errors
#   puts "All good"
# end
#
# puts "All good" if !errors
# puts "All good" unless errors




hour = 21
case
when hour < 12
  puts "Good Morning"
when hour > 12 && hour < 18
  puts "Good afternoon"
else
  puts "Good evening"
end


country_code = "No"
case country_code
when "Au" then puts "Australia"
when "Fr" then puts "France"
when "Nz" then puts "New Zealand"
when "No" then puts "Norway"
else
  puts "Another country"
end


#
# 1. Drinking age?
#
# Ask the user for their age.
# Remember that anytime you get input, it is a string, so you will need to change the age input to a number.
# If age is less than 18, print an appropriate message.
# If the age is equal to or over 18, print a different message.
# 2. Air Conditioning
#
# Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
# If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
# If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now! It's hot!"
# If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."
# 3. Sydney Suburbs
#
# Create a program that asks what suburbs you live in.
# Depending on the answer, print an appropriate response of your choosing

#
#
#
# puts "How old are you?"
#
# userAge = gets.to_f
# # userAge.to_i
#
# if userAge < 18
#   puts "Step away from the alchol, given #{userAge}"
# else userAge >= 18
#   puts "Welcome, given #{userAge}"
# end
#



puts "What temperature is it now? Just guess"

curTemp = gets.to_f

puts "Is A/C available? (Y/N)"

air_con_running = gets.chomp.upcase

puts "What temperature you want to set?"

desiredTemp = gets.to_f


if air_con_running == "Y"
  air_con_running = true
else air_con_running = false
end


puts case
      when curTemp>desiredTemp && air_con_running
        "Turn on the A/C please"
      when curTemp>desiredTemp && !air_con_running
        "Fix the A/C! It's too hot"
      when curTemp<desiredTemp && !air_con_running
        "Fix the A/C whenever available. For now, it's cool"
      else
        "It's just cool and there's no problem with the A/C too. Perfect."
      end








print "Which suburb do you live in?"

suburb = gets.chomp

p "Alright, so you're living in #{suburb}. I already know that."

case user_suburb
when "Potts Point", "Vaucluse", "Glamarama"
  puts "La de da"
when "Manly"
  puts "Don't get koi with me"
when "West Head"
  puts "Thousand miles from care"
else
  puts "I am sure that that is nice place"
end




# JAVASCRIPT
# var myName = "Roger";
# if ( myName === "Roger" ) {
#   console.log( "Is it really?" );
# } else if ( myName === "Bill" ) {
#   console.log( "You're probably a genius" );
# } else {
#   console.log( "Well then, it isn't Roger or Bill")
# }
# }
# }
