# Activity:
#
# You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.
# Specification:
#
# The user should be asked to guess a number
# If the user's guess is correct, the user should see a congratulatory message
# If the user's guess is not correct, the user should be asked to guess the number again.
# Extensions:
#
# Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"








puts "Guess my number".upcase

puts "In what range you want to choose?"

range = gets.to_i

random_number = Random.rand(range)

p random_number

puts "Will you guess the number? Enter your guess."

guessed_number = gets.to_i

  while random_number != guessed_number
    if random_number > guessed_number
      puts "Wrong. Guess higher"
      guessed_number = gets.to_i
    else
      puts "Wrong. Guess lower"
      guessed_number = gets.to_i
    end
  end
# if random_number == guessed_number
  puts "Voila! You have guessed it!"
# end






#
#
# puts "Guess my number".upcase
#
# puts "In what range you want to choose?"
#
# # range = gets.to_i
#
#
# random_number = Random.rand 0..10
#
# p random_number
#
# puts "Will you guess the number? Enter your guess."
#
#
# guessed_number = gets.to_i
#
#   while random_number != guessed_number
#       puts "please, try again"
#       guessed_number = gets.to_i
#   end
#
# if random_number == guessed_number
#   puts "Voila! You have guessed it!"
# end
