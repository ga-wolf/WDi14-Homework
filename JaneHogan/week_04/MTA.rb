puts "Hello Jane and Betty"
require 'pry'


# assume the user will input correctly the name of the line they want to get on and of at.
# tell the user the total number of stops for the trip and the names of the stop in order.

# Component: create the lines the user can travel on.

def lines
	{
	:n_line => ["Times Square", "34th", "28th on N", "23rd on 6", "Union Square", "8th on N"],

	:l_line => ["8th on L", "6th", "Union Square", "3rd", "1st"],

	:l6 =>["Grand Central", "33rd", "28th on 6", "23rd on 6", "Union Square", "Astor Place"]
}
end

#Component - assume user inputs the following - need to use puts and get.chomp
# start_station
# start_line
# end_station
# end_line

# Component: finding whether the user needs to change lines at all

def only_one_line (start_line, end_line)
  if start_line == end_line
  only_one_line = true
  else
    only_one_line = false
  end
end


# //definited methods to use in journey

def num_start (start_line, start_station)
	lines[start_line].index(start_station)
end

def num_union (start_line)
	lines[start_line].index("Union Square")
end

def num_end (end_line, end_station)
	lines[end_line].index(end_station)
end

def journey (line, num1, num2)
	lines[line][num1..num2]
end

def reverse_journey (line, num1, num2)
	reverse_array = lines[line].reverse
	reverse_array[num1..num2]
end

# Component - finding the journey if the user doesn't change lines.  Want to use the pattern lines[:n_line].index("Times Square") but can't get it to work

def one_stage_journey (num_start, num_end)
	if num_start < num_end
		journey
	else
		reverse_journey
end







def one_route (start_line, start_station, end_station)
	stop1num = lines [start_line].index(start_station)
	stop2num = lines [start_line].index(start_station)
	if
		stop1num < stop2num
		one_route = lines[start_line][stop1num..stop2num]
	else
		reverse_route = lines[start_line].reverse
		one_route = reverse_route[stop1num .. stop2num]
	end
end



# Component: if need to change lines, finding the portions of the trip between start station and end station and order of the station.
need to get index numbers of start_station and

def change_route
change_route (start_line, start_station, end_line, end_station)

end


# Component - getting things to run in the right order





binding.pry
puts " "
