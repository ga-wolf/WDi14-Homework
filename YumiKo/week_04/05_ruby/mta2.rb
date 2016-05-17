require 'pry'

def mta(from_line_name, from_station, to_line_name, to_station)
  from_line_name = from_line_name.to_s if from_line_name == 6
  to_line_name = to_line_name.to_s if to_line_name == 6

  def lines_func
    lines = {
      :l => %w(Times_Square 34th 28th 23rd Union_Square 8th),
      :m => %w(8th 6th Union_Square 3rd 1st),
      "6" => %w(Grand_Central 33rd 28th 23rd Union_Square Astor_Place)
    }
    return lines
  end

  from_line = lines_func[from_line_name]
  from_index = from_line.index from_station
  first_us_index = lines_func[from_line_name].index "Union_Square"

  to_line = lines_func[to_line_name]
  to_index = to_line.index to_station
  second_us_index = lines_func[to_line_name].index "Union_Square"

  one_line_paths = Array.new
  prev_US_paths = Array.new
  after_US_paths = Array.new
# When the lines are same
  if from_line == to_line
    if from_index <= to_index then one_line_paths = from_line[from_index..to_index]
    else one_line_paths = from_line[to_index..from_index].reverse
    end
    one_line_paths.shift
    puts "Your journey from #{from_station} to #{to_station} is through #{one_line_paths}."
    puts "Total stations : #{one_line_paths.length}"
# When the lines are different
  else
    if from_index <= first_us_index then prev_US_paths = from_line[from_index..first_us_index]
    else prev_US_paths = from_line[first_us_index..from_index].reverse
    end
    prev_US_paths.shift
    if to_index > second_us_index then after_US_paths = to_line[second_us_index..to_index]
    else after_US_paths = to_line[to_index..second_us_index].reverse
    end
    after_US_paths.shift
    stop_number = prev_US_paths.length + after_US_paths.length
    puts "Your journey from #{from_line_name} line #{from_station} to #{to_line_name} line #{to_station} is through #{prev_US_paths}."
    puts "Change your train to #{to_line_name}"
    puts "Keep your journey through #{after_US_paths}"
    puts "Total stations : #{stop_number}"
  end
end

mta(:l, "8th", :l, "34th")
mta(:l, "8th", 6, "33rd")
mta(6, "Union_Square", 6, "33rd")
mta(6, "Union_Square", 6, "Union_Square")
