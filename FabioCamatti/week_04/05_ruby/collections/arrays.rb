require 'pry'

brothers = []
brothers = ["Groucho", "Harpo", "Chico"]
movies = ["Satantango", "Toy Story 3", "Jaws", "Shrek"]

# Use the constructor
empty_array = Array.new # []

three_nils = Array.new( 3 ) # [ nil, nil, nil ]
three_booleans = Array.new( 3, true ) # [ true, true, true ]

tic_tac_toe_board = Array.new ( 3 ) { Array.new(3) }

alphabet = ("A".."Z").to_a # Get a range back, turn it into an array

first_letter = alphabet[0] # Gets the first letter
last_letter = alphabet[-1] # Gets the last letter

first_three_letters = alphabet[0..2] # Gets the 3 first letters
first_three_letters = alphabet.take( 3 ) # Same: gets the 3 first letters



arr_of_numbers = [ 1, 2, 3, 4, 5 ]
arr_of_numbers.push( 6 )
arr_of_numbers << 7
arr_of_numbers << 8
arr_of_numbers << 9 << 10

arr_of_numbers.unshift( 0 ) # Put 0 at the beginning
# arr_of_numbers.unshift( -0 )

arr_of_numbers.insert( 3, "Serge" )
arr_of_numbers.insert( 4, "didn't", "mary", "Jane" )

arr_of_numbers.pop() # Deletes the last value from the array
arr_of_numbers.delete_at( 3 ) # Deletes the value at specific index

arr_of_numbers.shift # Deletes the first value of the array

arr = [11, 2124, 11, 124124, 11, 2, 0.2 ]
arr.uniq # This doesn't change the variable arr!
arr.uniq! # This is destructive, it will change the variable

p alphabet

alphabet.each do |i|
  # puts "This just ran for the letter #{i}"
end

another_arr_of_numbers = [ 1, 2, 3, 4, 5 ]


# Printing the valuse in the array

another_arr_of_numbers.each do |current_number|
  puts current_number
end

puts

another_arr_of_numbers.each { |num|  }

puts

# Reversing an array
another_arr_of_numbers.reverse_each do |num|
  puts num
end

puts

another_arr_of_numbers.reverse_each { |n| }

puts

another_arr_of_numbers.reverse_each { |n|  }

puts""

for number in another_arr_of_numbers
   number
end

# Manupulating the array

a_bunch_of_words = ["Pebble", "Rebecca", "Granite", "Gainsboro" ]

puts

upcased = a_bunch_of_words.each do |word|
  word.upcase
end

arr_of_words = ["a", "the", "gobbledygook", "rebeccapurple"]

# Like a search function stored in a var
long_words = arr_of_words.select { |word| word.length > 3 }

arr_of_numbers = [1,2,3,4,5,6]

# With the bang ! - the operationg will be destructive
arr_of_numbers.select! { |num| num.even?  }


binding.pry
puts ""
