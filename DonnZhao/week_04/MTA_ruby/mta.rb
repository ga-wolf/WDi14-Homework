# Title: MTA Lab
# Activity:
#
# Students should create a program that models a simple subway system.
#
# The program takes the line and stop that a user is getting on at and the line
#and stop that user is getting off at and prints the total number of stops for the trip.
#
# There are 3 subway lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square,
#but there are no other intersection points.
# For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line,
#so you'll have to differentiate this when you name your stops in the arrays.
# We should be able to say:
#
# plan_trip( :n, "Times Square", :l, "Grand Central" )
# # Or something along those lines
# Hints:
#
# Don't worry about user input initially:
#get it working with hardcoded values first, and wire up the user interface once that's working
# Scope works in a different way in Ruby, so variables that you define outside won't be accessible in a method.
# Maybe think about using a function to return data. Or perhaps research other types of variables
# A symbol can't just be a number! 1 but not :1
# Consider diagraming the lines by sketching out the subway lines and their stops and intersection.
# Make subway lines keys in a hash, while the values are an array of all the stops on each line.
# The key to the lab is to find the intersection of the lines at Union Square.
# Make sure the stops that are the same for different lines have different names
# (i.e. 23rd on the N and on the 6 need to be differentiated)
# plan_trip( :n, "Times Square", :l, "Grand Central" )
# require 'pry'
# def line ()
# lines  = {
#   "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
#   "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
#   "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
# }

def plan_trip (on_line, on_station, off_line, off_station)
  lines  = {
    :N => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    :L => ["8th", "6th", "Union Square", "3rd", "1st"],
    6 => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }

  if on_line == off_line
     on_number = lines[on_line].index(on_station)
     off_number = lines[on_line].index(off_station)

    if on_number > off_number
        stations = lines[on_line][off_number..on_number].reverse
    elsif on_number < off_number
        stations =lines[on_line][on_number..off_number]
    else
       message = "Come on, you are at #{off_station} station"
    end
    if !message
    stops = stations.length-1
    puts "You have to travel on #{on_line} line via #{stations} after #{stops} stops you will reach #{off_station}"
    else p message
    end
  end

  if on_line != off_line
      us_number1 = lines[on_line].index("Union Square")
      us_number2 = lines[off_line].index("Union Square")
      on_number = lines[on_line].index(on_station)
      off_number = lines[off_line].index(off_station)
    if on_number > us_number1
        stations = lines[on_line][us_number1..on_number].reverse
    elsif on_number < us_number1
        stations =lines[on_line][on_number..us_number1]
    end
    if off_number > us_number2
       stations2 = lines[off_line][us_number2..off_number]
    elsif off_number < us_number2
       stations2 = lines[off_line][off_number..us_number2].reverse
    else
       message = "then you are at #{off_station}"
    end

    puts "You have to travel on #{on_line} line via #{stations}"
    if !message
    stops = (stations + stations2).length-2
    puts "Change at Union Square to #{off_line} line then via #{stations2}"
    puts "then you will reach #{off_station},total #{stops} stops"
  else puts message
    end

  end
end




plan_trip( :N, "Times Square", :L, "8th")
