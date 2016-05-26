# Title: MTA Lab
# Activity:
#
# Students should create a program that models a simple subway system.
#
# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the total number of stops for the trip.
#
# There are 3 subway lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points.
# For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.
# We should be able to say:
#
# plan_trip( :n, "Times Square", :l, "Grand Central" )
# # Or something along those lines
# Hints:
#
# Don't worry about user input initially: get it working with hardcoded values first, and wire up the user interface once that's working
# Scope works in a different way in Ruby, so variables that you define outside won't be accessible in a method. Maybe think about using a function to return data. Or perhaps research other types of variables
# A symbol can't just be a number!
# Consider diagraming the lines by sketching out the subway lines and their stops and intersection.
# Make subway lines keys in a hash, while the values are an array of all the stops on each line.
# The key to the lab is to find the intersection of the lines at Union Square.
# Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)


n_line = [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
# "Union Square" = index[4] - need to change
l_line = [ "8th", "6th", "Union Square", "3rd", "1st"]
# "Union Square" = index[2] - need to change
six_line = [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
# "Union Square" = index[4] - need to change


plan_trip ( start_line, start_stop, end_line, end_stop)
print "Please enter start line n, l, six"
start_line = gets().chomp
print "Please enter start station"
start_station = gets().chomp
print "Please enter end line n, l, six"
end_line = gets().chomp
print "Please enter end station"
end_station = gets().chomp

first_intersection = start_line.index("Union Square")
p first_intersection = start_line.index("Union Square")

case train
when "n"
  train = n_line
when "l"
  train = l_line
when "six"
  train = six_line
end

# When the line is the same
if start_line == end_line
numStops == train.index(end_station) - train.index(start_station)

# When the line is different
  elsif start_line !== end_line
numStops == train.index(start_line) < train.index(intersection)

end

p total number of stops
