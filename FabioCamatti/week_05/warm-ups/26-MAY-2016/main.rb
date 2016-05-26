require "pry"

class  Anagram

   def anagrammatise (word, arr)
     word = word.chars.sort.join
     arr.each do |w|
       w2 = w.chars.sort.join
       if word == w2
         return word
       end
     end
   end
end


d = Anagram.new
puts d.anagrammatise( "listen", ["enlists", "google", "inlets", "banana"])

# Write a program that, given a word and a list of possible anagrams, selects the correct one(s).
#
# In other words, given: `"listen"` and `["enlists" "google" "inlets" "banana"]` the program should return "inlets".
