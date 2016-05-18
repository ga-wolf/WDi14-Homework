# Declare all the train stations
require "pry"

@train_lines = {
    :N => ["Times Square", "34th", "28thN", "23rdN", "Union Square", "8thN"],
    :L => ["8thL", "6th", "Union Square", "3rd", "1st"],
    "6" => ["Grand Central", "33rd", "28th6", "23rd6", "Union Square", "Astor Place"],
}

def train_system(starting_line, starting_station, end_line, end_station)

      line1 = @train_lines[starting_line]
      line2 = @train_lines[end_line]

      stop1 = @train_lines[starting_line].index(starting_station)
      stop2 = @train_lines[end_line].index(end_station)

    if @train_lines[starting_line] == @train_lines[end_line]
      stop = line1[stop1..stop2]
      cump = stop.length

      if cump > 0
        stops = stop.join(", ")
        puts "You must travel through the following stops: #{stops} on the line  #{starting_line}, #{cump - 1} stops in total."
      elsif cump <= 0
        rev = line1.reverse
        stop1 = line1.index(starting_station)
        stop2 = line2.index(end_station)
        stop = rev[stop2..stop1]
        stops = stop.join(", ")
        cump = stop.length - 1
        puts "You must travel through the following stops: #{stops} on the line  #{starting_line}, #{cump} stops in total."
        puts
      end

    elsif @train_lines[starting_line] != @train_lines[end_line]
      new_end_station = "Union Square"
      stop1 = line1.index(starting_station)
      p stop1
      stop2 = line1.index(new_end_station)
      p stop 2

    end

end

train_system( :N, "Times Square", :N, "8thN")
train_system( :N, "8thN", :N, "Times Square")
puts ""
