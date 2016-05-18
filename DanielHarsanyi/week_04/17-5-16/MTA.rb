  $lines = {
    "N Line" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "L Line" => ["8th St", "6th", "Union Square", "3rd", "1st"],
    "6 Line" => ["Grand Central", "33rd", "28th St", "23rd St", "Union Square", "Astor Place"],
  };

# Method to check to see if the lines inputted are the same
def are_lines_same (depart_line, destination_line)
  if depart_line == destination_line
    true
  else
    false
  end
end

# To work out the message for a single line trip
$single_trip_message = ""
$arr_of_trip = []
def same_line_trip (depart_line, depart_station, destination_station)
    $single_trip_message += "You must travel through the following stops on the #{depart_line}: "
    arr_of_line = $lines[depart_line]
    depart_station_index = arr_of_line.index depart_station
    destination_station_index = arr_of_line.index destination_station
        if destination_station_index > depart_station_index
          depart_station_index.upto(destination_station_index).each do |station|
              $arr_of_trip << arr_of_line[station]
              $num_of_stops = $arr_of_trip.length
            end
        elsif destination_station_index < depart_station_index
          depart_station_index.downto(destination_station_index).each do |station|
              $arr_of_trip << arr_of_line[station]
              $num_of_stops = $arr_of_trip.length
        end
      end
  $single_trip_message << $arr_of_trip.join(", ") + "."
  $single_trip_message << "\n#{$num_of_stops} stops in total."
  puts $single_trip_message
end

# To work out the message for a multiple line trip
$multiple_line_trip_message = ""
$arr_of_first_line_trip = []
$arr_of_second_line_trip = []
def different_line_trip (depart_line, depart_station, destination_line, destination_station)
  $multiple_line_trip_message += "You must travel through the following stops on the #{depart_line}: "
  arr_of_first_line = $lines[depart_line]
  depart_station_index = arr_of_first_line.index depart_station
  first_union_square_index = arr_of_first_line.index "Union Square"
  arr_of_second_line = $lines[destination_line]
  destination_station_index = arr_of_second_line.index destination_station
  second_union_square_index = arr_of_second_line.index "Union Square"
      if depart_station_index > first_union_square_index
        depart_station_index.downto(first_union_square_index).each do |station|
          $arr_of_first_line_trip << arr_of_first_line[station]
          $num_of_first_line_stops = $arr_of_first_line_trip.length
        end
      elsif depart_station_index < first_union_square_index
        depart_station_index.upto(first_union_square_index).each do |station|
          $arr_of_first_line_trip << arr_of_first_line[station]
          $num_of_first_line_stops = $arr_of_first_line_trip.length
        end
      end

$multiple_line_trip_message << $arr_of_first_line_trip.join(", ") + "."
$multiple_line_trip_message << "\nChange at Union Square."
$multiple_line_trip_message << "\nYour journey continues through the following stops on the #{destination_line}: "
      if destination_station_index > second_union_square_index
        ((second_union_square_index)+1).upto(destination_station_index).each do |station|
          $arr_of_second_line_trip << arr_of_second_line[station]
          $num_of_second_line_stops = $arr_of_second_line_trip.length
        end
      elsif destination_station_index < second_union_square_index
        ((second_union_square_index)-1).downto(destination_station_index).each do |station|
          $arr_of_second_line_trip << arr_of_second_line[station]
          $num_of_second_line_stops = $arr_of_second_line_trip.length
        end
      end

total_stops = $num_of_first_line_stops + $num_of_second_line_stops
$multiple_line_trip_message << $arr_of_second_line_trip.join(", ") + "."
$multiple_line_trip_message << "\n#{total_stops} stops in total."
puts $multiple_line_trip_message

end

def plan_trip(depart_line, depart_station, destination_line, destination_station)
  if depart_station == destination_station
    puts "Walk you lazy fuck."
  elsif are_lines_same(depart_line, destination_line) == true
    same_line_trip(depart_line, depart_station, destination_station)
  else
    different_line_trip(depart_line, depart_station, destination_line, destination_station)
  end
end


def get_user_depart_line
    print "What line are you going from? (Enter: N Line, L Line or 6 Line) "
    user_depart_line = gets().chomp
end

def get_user_depart_station(user_depart_line)
      case user_depart_line
      when "N Line"
        print "What station are you going from? (Enter: Times Square, 34th, 28th, 23rd, Union Square or 8th) "
        user_depart_station = gets().chomp
      when "L Line"
        print "What station are you going from? (Enter: 8th St, 6th, Union Square, 3rd or 1st) "
        user_depart_station = gets().chomp
      when "6 Line"
        print "What station are you going from? (Enter: Grand Central, 33rd, 28th St, 23rd St, Union Square or Astor Place) "
        user_depart_station = gets().chomp
      end
    end

def get_user_destination_line
  print "What line are you going to? (Enter: N Line, L Line or 6 Line) "
  user_destination_line = gets().chomp
end

def get_user_destination_station(user_destination_line)
      case user_destination_line
      when "N Line"
        print "What station are you going from? (Enter: Times Square, 34th, 28th, 23rd, Union Square or 8th) "
        user_depart_station = gets().chomp
      when "L Line"
        print "What station are you going from? (Enter: 8th St, 6th, Union Square, 3rd or 1st) "
        user_depart_station = gets().chomp
      when "6 Line"
        print "What station are you going from? (Enter: Grand Central, 33rd, 28th St, 23rd St, Union Square or Astor Place) "
        user_depart_station = gets().chomp
      end
    end

user_depart_line = get_user_depart_line()
user_depart_station = get_user_depart_station(user_depart_line)
user_destination_line = get_user_destination_line()
user_destination_station = get_user_destination_station(user_destination_line)

plan_trip(user_depart_line, user_depart_station, user_destination_line, user_destination_station)
