# ###1. Drinking age?
# - Ask the user for their age.
#     - Remember that anytime you get input, it is a string, so you will need to change the age input to a number.
# - If age is less than 18, print an appropriate message.
# - If the age is equal to or over 18, print a different message.

print "How old are you?"

given_age = gets().to_f

if given_age < 18
  puts "An appropriate message, given #{ given_age }"
elsif given_age >= 18
  puts "You are over 18, give #{ given_age }"
end
