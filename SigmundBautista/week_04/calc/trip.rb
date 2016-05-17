# distance
# miles per gallon
# price per gallon
# speed in miles per hour
#
# distance = 10miles
# distnace / miles per gallon * price per gallon
def trip
print "How many miles are you travelling: "
distance = gets.to_i
print "How many miles per gallon does your car make: "
milage = gets.to_f
print "What is the price per gallon: "
price = gets.to_f
print "Average speed in MPH: "
speed = gets.to_f

time = distance / speed
puts "trip time will be #{time} hour"
cost = distance / milage * price
puts "cost will be $#{cost}"

end

trip()
