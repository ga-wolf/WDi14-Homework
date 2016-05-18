# good for MTA, Jack:
# erik_index = a.index "Eric"
# p a [erik_index]
# .index("TS")
# use each loop.
#
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

student = {
  :name => "Roger",
  :class => "UXDi",
  "Some information" => false
}

train_lines_hash =  {
  "Line N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "Line L" => ["8th", "6th", "Union Square", "3rd", "1st"],
  "Line 6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

print "What will be the first line? "
starting_line = gets().chomp()

print "Where are you starting from? "
starting_point = gets().chomp()

print "What will be the second line? "
second_line = gets().chomp()

print "Where are you going? "
final_point = gets().chomp()

starting_point_index = train_lines_hash[starting_line].index starting_point
union_square_first_line_index = train_lines_hash[starting_line].index "Union Square"

final_point_index = train_lines_hash[second_line].index final_point
union_square_second_line_index = train_lines_hash[second_line].index "Union Square"

# p train_lines_hash[starting_line]
# p starting_point
# p starting_line
# p starting_point_index
# p union_square_first_line_index
# p final_point_index
# p union_square_second_line_index


if starting_point_index < union_square_first_line_index
    trip_on_first_line = train_lines_hash[starting_line][starting_point_index..union_square_first_line_index]

    if final_point_index > union_square_second_line_index
        trip_on_second_line = train_lines_hash[second_line][union_square_second_line_index..final_point_index]

    elsif final_point_index < union_square_second_line_index
        trip_on_second_line = train_lines_hash[second_line][final_point_index..union_square_second_line_index]
        trip_on_second_line.reverse!
    else trip_on_second_line = ["Nothing, you are lucky!"]
    end


elsif starting_point_index > union_square_first_line_index
    trip_on_first_line = train_lines_hash[starting_line][union_square_first_line_index..starting_point_index]
    trip_on_first_line.reverse!

    if final_point_index > union_square_second_line_index
        trip_on_second_line = train_lines_hash[second_line][union_square_second_line_index..final_point_index]

    elsif final_point_index < union_square_second_line_index
        trip_on_second_line = train_lines_hash[second_line][final_point_index..union_square_second_line_index]
        trip_on_second_line.reverse!
    else trip_on_second_line = ["Nothing, you are lucky!"]
    end

else

    if final_point_index > union_square_second_line_index
        trip_on_first_line = ["Go straight to the second line !!"]
        trip_on_second_line = train_lines_hash[second_line][union_square_second_line_index..final_point_index]

    elsif final_point_index < union_square_second_line_index
        trip_on_first_line = ["Go straight to the second line !!"]
        trip_on_second_line = train_lines_hash[second_line][final_point_index..union_square_second_line_index]
        trip_on_second_line.reverse!

    else trip_on_first_line = ["Guess what??"]
         trip_on_second_line = ["You don't need to take the train, you are already in Union Square my friend!!"]
    end


end


if starting_point == "Union Square" && final_point == "Union Square"
  puts trip_on_first_line
  puts trip_on_second_line

elsif starting_point == "Union Square"
  puts "Go straight to the #{second_line} !!"
  puts "You won't have to change train, only #{trip_on_second_line.length} stops on #{second_line}: #{trip_on_second_line}."
  puts "Total number of stops: #{trip_on_second_line.length}."

elsif final_point == "Union Square"
  puts "You are lucky"
  puts "You won't have to change train, only #{trip_on_first_line.length} stops on #{starting_line}: #{trip_on_first_line}."
  puts "Total number of stops: #{trip_on_first_line.length}."

else
  puts "You will start on #{starting_line} with the following #{trip_on_first_line.length} stops: #{trip_on_first_line}."
  puts "You will follow on #{second_line} with the following #{trip_on_second_line.length} stops: #{trip_on_second_line}."
  puts "It is a long trip, good luck."
  puts "Total number of stops: #{trip_on_second_line.length + trip_on_first_line.length}."
end

#   if
#     air_con = true
#   else air_con == "n"
#     air_con = false
# end

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
