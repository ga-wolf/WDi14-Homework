require "pry"

#Two arguments here, one for the the file name and the other for the mode (read or write or etc...)
file = File.open( "peoples.txt", "r")
# p file.readline
# p file.readline
# p file.readline
# p file.readline

# all_lines = file.readlines
# p all_lines

# all_lines.each do |line|
#   p "The current line's content: #{line}"
# end
#
# file.rewind
# file.each do |line|
#   p line
# end
file.close

file = File.open "peoples.txt", "a+"

file.puts "Person 1"
file.puts "Person 2"
file.puts "Person 3"

file.close

puts ""
