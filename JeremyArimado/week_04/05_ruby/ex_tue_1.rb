
require 'pry'

# #Predicate methods
#
# #Destructive methods
#
# days_of_the_week = [
#     "Monday",
#     "Tuesday",
#     "Wednesday",
#     "Thursday",
#     "Friday",
#     "Saturday",
#     "Sunday"
# ];
#
# # sunday
# puts days_of_the_week.insert(0, days_of_the_week.pop())
# puts '----'
#
# # 2D array
# weekdays = days_of_the_week[1..5];
# weekends = [days_of_the_week[0]].push(days_of_the_week[6]);
# puts weekdays
# puts weekends
# week_2d = [weekdays, weekends]
# p week_2d
#
# # Remove weekends
# week_2d.delete_at(1);
# p week_2d;
#
# # Sort alphebetically
# p week_2d[0].sort()
#
#
# # [0, 6]

# HASHES

# student_one = {
#     :name => "Roger",
#     :class => "UXDi",
#     "Some pressing information" => false
# }
#
# student = {
#     name: "Roger"
# }
#
# binding.pry
#
# Hash.new default value
#
# puts student[:name];

# HASH EXERCISES ----------------------------------

# A

a = ["Anil", "Erik", "Jonathan"]

puts a[1];

puts a.push('Jeremy');

h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}

# B

puts h[1];

puts h[:two]

puts h["two"]

puts h[3] = "Three"

puts h[:four] = 4

p h

# C

is = {true => "It's true!", false => "It's false"}

puts is["erik"]

# 1. true
# 2. It's false
# 3. false
# 4. asd
# 5. nil

# D

# How would you return the smallest of Erik's favorite numbers? arr.min
# How would you return an array of Anil's favorite numbers that are also even? select
# How would you return an array of the favorite numbers common to all users? 
# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
