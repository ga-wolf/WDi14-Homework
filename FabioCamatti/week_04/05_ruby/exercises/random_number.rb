# #Title: Guess The Number
#
# ###Activity:
# - You are to generate a basic "guess my number" game.  The computer will pick a random number between 0 and 10.  The user will guess the number until they guess correctly.
#
# ###Specification:
# - The user should be asked to guess a number
# - If the user's guess is correct, the user should see a congratulatory message
# - If the user's guess is not correct, the user should be asked to guess the number again.
#
# ###Extensions:
# - Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# - Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"

puts "Guess a number game"
puts
puts "Please, choose the maximum number value"
max_num = gets().to_i
number = Random.rand(0..max_num)

puts "Please, choose a number between 0 and #{max_num}!"
guess = gets().to_i

until number == guess
  if guess > number
    puts "A little lower..."
    guess = gets().to_i
  elsif guess < number
    puts "A little higher..."
    guess = gets().to_i
  else
    puts "What is your new guess?"
    guess = gets().to_i
  end
end

puts "Congratulations, you got it right.  The number is #{number}"
