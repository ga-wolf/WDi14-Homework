require 'pry'

# Activity:
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
#
# We should be able to say:
# plan_trip( :n, "Times Square", :l, "Grand Central" )
# # Or something along those lines
#
# Hints:
# Don't worry about user input initially: get it working with hardcoded values first, and wire up the user interface once that's working
# Scope works in a different way in Ruby, so variables that you define outside won't be accessible in a method. Maybe think about using a function to return data. Or perhaps research other types of variables
# A symbol can't just be a number!
# Consider diagraming the lines by sketching out the subway lines and their stops and intersection.
# Make subway lines keys in a hash, while the values are an array of all the stops on each line.
# The key to the lab is to find the intersection of the lines at Union Square.
# Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

n_line = [ "Times Square", "34th", "28th on the N", "23rd on the N", "Union Square", "8th on the N" ]
l_line = [ "8th on the L", "6th", "Union Square", "3rd", "1st" ]
six_line = [ "Grand Central", "33rd", "28th on the 6", "23rd on the 6", "Union Square", "Astor Place" ]

$train_system = {
  :n_line => n_line,
  :l_line => l_line,
  :six_line => six_line
}


def welcome
  puts ""
  puts "Welcome to the MTA, below is a list of our network:"
  puts ""
  puts "The n_line: Times Square, 34th, 28th on the N, 23rd on the N, Union Square, 8th on the N"
  puts "The l_line: 8th on the L, 6th, Union Square, 3rd, 1st"
  puts "The six_line: Grand Central, 33rd, 28th on the 6, 23rd on the 6, Union Square, Astor Place"
end
welcome()

def get_info
  puts""
  puts "What line are you starting on? "
  @start_line = gets().chomp()

  puts "What stop are you starting at? "
  @start_stop = gets().chomp()

  puts "What line are you finishing on? "
  @end_line = gets().chomp()

  puts "What stop are you getting off at? "
  @end_stop = gets().chomp()
end
get_info()


@start_stop_index = $train_system[@start_line.to_sym].index{|stop| stop == @start_stop}
@end_stop_index = $train_system[@end_line.to_sym].index{|stop| stop == @end_stop}

def distance_same_line
  when @start_line == @end_line
    if @start_stop_index < @end_stop_index
      @distance = @end_stop_index - @start_stop_index
    else
      $train_system[@start_line.to_sym].reverse!
      @distance = @start_stop_index - @end_stop_index
    end
  @distance
end

@start_union = $train_system[@start_line.to_sym].index{|union| union == "Union Square"}
@end_union = $train_system[@end_line.to_sym].index{|union| union == "Union Square"}

def distance_parts
  when @start_line != @end_line
    if @start_stop_index < @start_union && @end_stop_index > @end_union
      @part_start = @start_union - @start_stop_index
      @part_end = @end_stop_index - @end_union
      @distance = @part_start + @part_end - 1

    elsif @start_stop_index > @start_union && @end_stop_index > @end_union
      $train_system[@start_line.to_sym].reverse!
      @part_start = @start_stop_index - @start_union
      @part_end = @end_stop_index - @end_union
      @distance = @part_start + @part_end - 1

    elsif @start_stop_index > @start_union && @end_stop_index < @end_union
      $train_system[@start_line.to_sym].reverse!
      $train_system[@end_line.to_sym].reverse!
      @part_start = @start_stop_index - @start_union
      @part_end = @end_union - @end_stop_index
      @distance = @part_start + @part_end - 1

    elsif @start_stop_index < @start_union && @end_stop_index < @end_union
      $train_system[@end_line.to_sym].reverse!
      @part_start = @start_union - @start_stop_index
      @part_end = @end_union - @end_stop_index
      @distance = @part_start + @part_end - 1
    end
  @part_start
  @part_end
  @distance
end

def list_of_stops
  when distance_same_line == true
    if @start_stop_index < @end_stop_index
      @list =
end


binding.pry
puts ""
