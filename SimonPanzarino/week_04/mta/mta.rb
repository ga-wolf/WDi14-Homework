def lines (choice)

  lines = {
    "N line" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "L line" => ["8th", "6th", "Union Square", "3rd", "1st"],
    "6 line" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }

  return lines[choice]

end

def plan_trip(start_line, start_station, end_line, end_station)

  p "Start on the #{start_line} at #{start_station}. Go past the following stops;"
  starting_index = lines(start_line).index(start_station)
  starting_union_square = lines(start_line).index("Union Square")
  ending_index = lines(end_line).index(end_station)
  ending_union_square = lines(end_line).index("Union Square")

  def go_forwards(start, ending, line)
    start.upto(ending) do |i|
      p lines(line)[i]
    end
  end

  def go_backwards(start, ending, line)
    start.downto(ending) do |i|
      p lines(line)[i]
    end
  end

  if start_line == end_line
    if starting_index < ending_index
      go_forwards(starting_index, ending_index, start_line)
    else
      go_backwards(starting_index, ending_index, start_line)
    end
  else
    if starting_index < starting_union_square
      go_forwards(starting_index, starting_union_square, start_line)
    else
      go_backwards(starting_index, starting_union_square, start_line)
    end

    p "Change at Union Square to #{end_line}"
    
    if ending_union_square < ending_index
      go_forwards(ending_union_square, ending_index, end_line)
    else
      go_backwards(ending_union_square, ending_index, end_line)
    end
  end

end

p "Choose your starting line (N line/L line/6 line) "
starting_line = gets().chomp()
p "Choose your starting station from #{lines(starting_line)} "
starting_station = gets().chomp()
p "Choose your ending line (N line/L line/6 line) "
ending_line = gets().chomp()
p "Choose your ending station from #{lines(ending_line)} "
ending_station = gets().chomp()

plan_trip(starting_line, starting_station, ending_line, ending_station)
