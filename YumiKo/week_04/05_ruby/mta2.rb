require 'pry'

def mta(from_l, from_st, to_l, to_st)
  from_l = from_l.to_s if from_l == 6
  to_l = to_l.to_s if to_l == 6
  def lines_func
    lines = {
      :l => %w(Times_Square 34th 28th 23rd Union_Square 8th),
      :m => %w(8th 6th Union_Square 3rd 1st),
      "6" => %w(Grand_Central 33rd 28th 23rd Union_Square Astor_Place)
    }
    return lines
  end

  from_line = lines_func[from_l]
  from_station = from_st
  to_line = lines_func[to_l]
  to_station = to_st

  from_index = from_line.index from_station
  to_index = to_line.index to_station

  first_us_index = lines_func[from_l].index "Union_Square"
  second_us_index = lines_func[to_l].index "Union_Square"

  prev_direction = 0
  after_direction = 0
  prev_us_paths = Array.new
  after_us_paths = Array.new

  direction = 0
  paths = Array.new

  if from_line == to_line
    if from_index <= to_index
      direction
    elsif from_index > to_index
        direction = 1
    end

    if direction == 0
      paths = from_line[from_index..to_index]
    else
      paths = from_line.reverse[(from_line.length - 1 - from_index)..(from_line.length - 1 - to_index)]
    end
    paths.shift
    puts "Your journey from #{from_station} to #{to_station} is through #{paths}."
    puts "Total stations : #{paths.length}"
  else
    if from_index <= first_us_index
      prev_direction
    elsif from_index > first_us_index
        prev_direction = 1
    end

    if to_index <= second_us_index
      after_direction = 1
    elsif to_index > second_us_index
      after_direction
    end

    if prev_direction == 0
      prev_us_paths = from_line[from_index..first_us_index]
    else
      prev_us_paths = from_line[first_us_index..from_index].reverse
    end

    if after_direction == 0
      after_us_paths = to_line[second_us_index..to_index]
    else
      after_us_paths = to_line[to_index..second_us_index].reverse
    end
    after_us_paths.shift

    stop_number = prev_us_paths.length + after_us_paths.length
    puts "Your journey from #{from_l} line #{from_station} to #{to_l} line #{to_station} is through #{prev_us_paths}."
    puts "Change your train to #{to_l}"
    puts "Keep your journey through #{after_us_paths}"
    puts "Total stations : #{stop_number}"
  end
end

mta(:l,"8th",:l,"34th")
mta(:l,"8th",6,"33rd")
mta(:m,"6th",6,"23rd")
mta(6,"Union_Square", 6,"33rd")
