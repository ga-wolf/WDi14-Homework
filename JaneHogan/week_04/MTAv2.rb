puts "Hello Jane and Betty"
require 'pry'


# the users journey is an array.
# if the lines are the same [start_line == end_line is true ] the array is :
#       start_num  find the index numbers of the start array
#       end_num find index number  on the start array
#       if in the same order as the stations in the original array journey = part of the array between and including the start_num and end_num  lineName???
#       else, need to select only the stations of the index number and have those in an array and then reverse that array using .reverse
# else if  the lines are different the lines will both intersect at union station and the user will need to change.
#       could create one big array of the two lines and delete duplicate of union square and then return two journeys from that array one from start_line to union square the other from union square to
#       OR
#       could just tell the user to change at Union Square and use one array selecting a sub-set of the start and end stations


# Component: create the lines the user can travel on.

def lines
	{
	"N" => ["Times Square", "34th", "28th on N", "23rd on 6", "Union Square", "8th on N"],

	"L" => ["8th on L", "6th", "Union Square", "3rd", "1st"],

	"6" =>["Grand Central", "33rd", "28th on 6", "23rd on 6", "Union Square", "Astor Place"]
}

end


def plan_trip(start_line, start_station, end_line, end_station)
	if start_line == end_line
		single_journey(start_line, start_station, end_station)
	else
		two_part(start_line, start_station, end_line, end_station)
	end
end


def single_journey(start_line, start_station, end_station)
  start_num =  lines[start_line].index(start_station)
  #puts start_num
  end_num = lines[start_line].index(end_station)
  #puts end_num

 	if start_num < end_num
 		user_array = lines[start_line][start_num + 1..end_num]
    	user_journey = user_array
   # 	puts user_journey
 	else
        user_array = lines[start_line][end_num..start_num - 1].reverse
 	#	puts user_array
  	end
end


def two_part (start_line, start_station, end_line, end_station)
	journey1 = single_journey start_line, start_station, "Union Square"
	puts "You will change at Union Square, travelling through the following stops: #{journey1}"
	journey2 = single_journey end_line, "Union Square", end_station
	puts "You will change at Union Square, travelling through the following stops: #{journey2}"
end


binding.pry
puts " "
