require 'pry'
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

# define each line as an array of stops
subway = {
  :lineN => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  :lineL => ["8th", "6th", "Union Square", "3rd", "1st"],
  :line6 => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

start_line = :lineN
start_station = "34th"
end_line = :line6
end_station = "33rd"

if start_line == end_line
  subway[start_line].reverse! if subway[start_line].index(start_station) > subway[end_line].index(end_station)

  start_index = subway[start_line].index(start_station)
  end_index = subway[end_line].index(end_station)

  trip_arr = subway[start_line][start_index..end_index]
  message = "Starting from #{start_station}, you must travel #{trip_arr.length - 1} stops, and disembark at #{end_station}."

  puts message

else
  subway[start_line].reverse! if subway[start_line].index(start_station) > subway[start_line].index("Union Square")

  start_index_1 = subway[start_line].index(start_station)
  end_index_1 = subway[start_line].index("Union Square")
  trip_arr_1 = subway[start_line][start_index_1..end_index_1]
  message_1 = "Starting from #{start_station}, you must travel #{trip_arr_1.length - 1} stops through #{trip_arr_1.join(", ")}, and disembark at Union Square."

  subway[end_line].reverse! if subway[end_line].index("Union Square") > subway[end_line].index(end_station)
  start_index_2 = subway[end_line].index("Union Square")
  end_index_2 = subway[end_line].index(end_station)
  trip_arr_2 = subway[end_line][start_index_2..end_index_2]
  message_2 = "From Union Squre, you must travel #{trip_arr_2.length - 1} stops through #{trip_arr_2.join(", ")}, to you destination, #{end_station}."

  puts message_1
  puts "Change at Union Square"
  puts message_2
end

binding.pry
puts ""
