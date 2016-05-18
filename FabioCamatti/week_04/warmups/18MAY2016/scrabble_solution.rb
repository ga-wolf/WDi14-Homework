
# Global variable @
@dict = {
  # %w create a array of strings
  1 => %w(A E I O U L N R S T),
  2 => %w(D G),
  3 => %w(B C M P),
  4 => %w(F H V W Y),
  5 => %w(K),
  8 => %w(J X),
  10 => %w(Q Z)
}

def score(word, times = 1)
  sum = 0
  word.upcase.chars.each do |c|
    @dict.each do |k,v|
      if v.include? c
        sum += k
      end
    end
  end

  case times
  when :double
    sum *= 2
  when :triple
    sum *= 3
  end

  sum
end



print "Please enter a word: "
puts score(gets.chomp)
