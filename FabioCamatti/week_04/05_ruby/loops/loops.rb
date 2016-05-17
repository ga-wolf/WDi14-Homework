#LOOPS IN RUBY


i = 10

while i > 0
  puts "I: #{i}"
  i -= 1
end

puts "Blast off!"

# Suggested to do not user for loops in Ruby

for i in 0..5
  puts "I:#{i}"
end

for letter in "A".."z"
  puts "Leter: #{letter}"
end

#LOOPS - ITERATORS

# 5.times do
#   puts "This just ran"
# end

# 5.times do |i|
#   puts i
# end

# 5.downto(1) do |i|
#   puts i
# end

10.upto(20) do |i|
  puts i
end
