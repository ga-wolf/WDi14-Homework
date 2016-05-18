# Pling Plang Plong
# Write a program that converts a number to a string per the following rules:
#
# If the number contains 3 as a prime factor, output 'Pling'.
#If the number contains 5 as a prime factor, output 'Plang'.
#If the number contains 7 as a prime factor, output 'Plong'.
#
# If the number does not contain 3, 5, or 7 as a prime factor,
#simply return the string representation of the number itself.
#
# E.g.
#
# The prime factors of 28 are [2, 2, 7].
#
# # => "Plong"
# The prime factors of 1755 are [3, 3, 3, 5, 13].
#
# # => "PlingPlang"
# The prime factors of 34 are [2, 17].
#
# # => "34"

def raindrops (num)
  msg = ""


  msg << "Pling" if num %3 == 0
  msg << "Plang" if num %5 == 0
  msg << "Plong" if num %7 == 0

  msg.empty? ? num : msg

#   if msg.empty?
#     return num
#   else
#   return msg
# end
end

puts raindrops(35)



#
#   puts 'you number?'
#   number = gets.to_i
#   if number%3 == 0
#     puts 'Pling'
#   elsif number%5 == 0
#     puts 'Plang'
#   elsif number%7 == 0
#     puts 'Plong'
#   else
#     puts '#{number}'
#
# end

# plingplangplong = ppp()
