require 'pry'

# file = File.open("peoples.txt", "r");

# p file.readline;
# p file.readline;
# p file.readline;
# p file.readline;
# p file.readline;
# p file.readline;

# all_lines = file.readlines;

# all_lines.each do |line|
#     p line.chomp();
# end

# file.each_line do |line|
#     p line
# end

file = File.open "peoples.txt", "a+"

file.puts "Person 1"
file.puts "Person 2"
file.puts "Person 3"
file.puts "Person 4"

file.close

binding.pry

puts ""
