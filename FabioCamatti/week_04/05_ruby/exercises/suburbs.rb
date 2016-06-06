# 3. Sydney Suburbs
# - Create a program that asks what suburbs you live in.
# - Depending on the answer, print an appropriate response of your choosing

print "Where do you live? "
user_suburb = gets().chomp()

case user_suburb
when "Potts Point", "Vaucluse", "Glamarama"
  puts "La de da"
when "Manly"
  puts "Don't get koi with me"
when "West Head"
  puts "Thousand miles from care"
else
  puts "I am sure that is a nice place"
end

# if user_suburb == "Potts Point" || user_suburb == "Vaucluse" || user_suburb == "Glamarama"
#   puts "La de da"
# elsif user_suburb == "Manly"
#   puts "Don't get koi with me"
# elsif user_suburb == "West Head"
#   puts "Thousand miles from care"
# else
#   puts "I am sure that is a nice place"
# end
