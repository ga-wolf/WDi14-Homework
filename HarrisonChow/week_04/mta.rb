
# require 'pry'
@all_line = {
  :n =>  ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  :l => ["8th", "6th", "Union Square", "3rd", "1st"],
  :"6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
}

def plan_trip(start_line, start_station, stop_line, stop_station )

  start_station_index = @all_line[start_line.to_sym].index start_station
  stop_station_index = @all_line[stop_line.to_sym].index stop_station
  transfer_startline_index = @all_line[start_line.to_sym].index "Union Square"
  transfer_stopline_index = @all_line[stop_line.to_sym].index "Union Square"

#for the same line
  if start_line == stop_line
    total_station = (stop_station_index - start_station_index).abs
    if stop_station_index > start_station_index
      station_pass = @all_line[start_line.to_sym][start_station_index+1 .. stop_station_index]
    else
      station_pass = @all_line[start_line.to_sym][stop_station_index .. start_station_index-1].reverse
    end
  puts "Your must travel through the following stops"
  puts "#{station_pass.join(', ')}"
  puts "on the #{start_line} line"
  puts "#{total_station} stops in total."

#for different line
  elsif start_line != stop_line

    # binding.pry
    total_station = (transfer_startline_index - start_station_index).abs + (transfer_stopline_index - stop_station_index).abs
    if transfer_startline_index > start_station_index
      station_pass_startline = @all_line[start_line.to_sym][start_station_index+1 .. transfer_startline_index]
    else
      station_pass_startline = @all_line[start_line.to_sym][transfer_startline_index .. start_station_index-1].reverse
    end

    if stop_station_index > transfer_stopline_index
      station_pass_stopline = @all_line[stop_line.to_sym][transfer_stopline_index+1 .. stop_station_index]
    else
      station_pass_stopline = @all_line[stop_line.to_sym][stop_station_index .. transfer_stopline_index-1].reverse
    end
    puts "Your must travel through the following stops"
    puts "#{station_pass_startline.join(' ')}"
    puts "on the #{start_line} line"
    puts "Change at Union Square."
    puts "Your journey continues through the following stops: "
    puts "#{station_pass_stopline.join(' ')}"
    puts "on the #{stop_line} line"
    puts "#{total_station} stops in total."
  end

end

# plan_trip :n, "34th", :n, "8th"
# plan_trip :n, "8th", :n, "28th"
plan_trip :n, "8th", :l, "8th"
# plan_trip :n, "Times Square", :l, "1st"
# plan_trip :n, "Times Square", :"6", "33rd"
