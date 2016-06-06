# Trip Calculator
#
# Calculate a trip time and cost given inputs four
#
# distance (Km)
# liters per Km
# price per liter
# speed in Km per hour

puts "Trip Calculator 1.0"

print "Enter the distance of your trip (Km): "
distance = gets().to_f

print "Enter the fuel consumption of your vehicle (L/100 Km): "
liters_km = gets().to_f

print "Enter the current price per liter for fuel($): "
price_liter = gets().to_f

print "Enter average speed (Km/h): "
average_speed = gets().to_f

trip_time = distance / average_speed
cost = ((distance / 100)* liters_km) * price_liter

puts "At an average speed of #{average_speed} Km/h, your trip will take #{trip_time} hours, and cost $#{cost}."
