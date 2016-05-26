
def trip
start_station = "34th"
start_line = "n"
end_station = "8th"
end_line = "n"


lines = {
  "n" => [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ],
  "l" => ["8th", "6th", "Union Square", "3rd", "1st"],
  "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

my_trip = [] # array to store the trip stops and transfer
start_index = "n".index(start_station)
end_index = "n".index(end_station)

# Single Line
if start_line == end_line
  if start_index < end_index
    "n"[start_index..end_index].each {|station| my_trip << station} # travelling forward
  else
    "n"[end_index..start_index].reverse_each {|station| my_trip << station} # travelling back along the line
  end

# Transfer
else
  if start_index < end_index
    "n"[start_index.."Union Square"].each {|station| my_trip << station}
    "l"["Union Square"..end_index].each {|station| my_trip << station}
  else
    "n"[start_index.."Union Square"].reverse_each {|station| my_trip << station}
    "l"["Union Square"..end_index].reverse_each {|station| my_trip << station}
  end
end

# Message
puts "#{my_trip.join(" ")}." # join the array
puts "Total of #{ my_trip.length } stops" # total of stops



end

trip()
