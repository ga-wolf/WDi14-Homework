
puts "Trip cost calculator".upcase

print "How far do you want to go?(mile)"

distance = gets.to_f

print "How much is fuel efficiency of your car?(miles per gallon)"

miles_per_gallon = gets.to_f

print "What is current cost of patrol?(dollar per gallon)"

price_per_gallon = gets.to_f

print "In what speed are you going to drive?(miles per hour)"

speed = gets.to_f

trip_cost = (distance/miles_per_gallon)*price_per_gallon
trip_time = distance/speed

puts "Your trip costs #{trip_cost}$."
puts "You need to spend #{trip_time} hours."
