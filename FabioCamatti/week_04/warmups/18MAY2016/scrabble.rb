# # Scrabble Score
#
# Write a program that, given a word, computes the scrabble score for that word.
#
# ```ruby


scrabble = {
    :score => case word
              when  /(?i:aeioulnrst)/.match(word) then puts 11111
              end
}




scrabble.score("cabbage")
# # => 14
# ```
#
# Your program should be in a file named `scrabble.rb`.
# You should be able to compute the score for any word entered by the user.
#
# ## Letter Values
#
# ```plain
# Letter                           Value
# A, E, I, O, U, L, N, R, S, T       1
# D, G                               2
# B, C, M, P                         3
# F, H, V, W, Y                      4
# K                                  5
# J, X                               8
# Q, Z                               10
# ```
#
# ## Extensions
#
# * You can play a `:double` or a `:triple` letter.
# * You can play a `:double` or a `:triple` word.
#
# ## Source
# Inspired by the [Extreme Startup](https://github.com/rchatley/extreme_startup) game
