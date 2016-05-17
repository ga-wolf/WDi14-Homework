# Trip Calculator
#
# Calculate a trip time and cost given inputs for
#
# distance
# miles per gallon
# price per gallon
# speed in miles per hour

print "What is the distance you want to travel?"
distance = gets.to_f

print "What speed will you be traveling in mph?"
speed = gets.to_f

print "How many miles per gallon do you get?"
miles_gallon = gets.to_f

print "What is the price per gallon?"
price_gallon = gets.to_f

trip_time = ((distance) / (speed)) * 60  
trip_cost = ((distance) / (miles_gallon)) * (price_gallon)
puts "Your trip time is #{trip_time} and it will cost you $#{trip_cost}"
