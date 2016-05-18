# (1..60).each do |num|
#   if num % 15 == 0
#     puts "fizzbuzz"
#   elsif num % 3 == 0
#     puts "fizz"
#   elsif num % 5 == 0
#     puts "buzz"
#   else
#     puts num
#   end
# end

1.upto(31) {|n| puts "#{ 'fizz' if n % 3 == 0 }#{'buzz' if n % 5 == 0}#{n if n % 3 != 0 && n % 5 != 0 }"}
