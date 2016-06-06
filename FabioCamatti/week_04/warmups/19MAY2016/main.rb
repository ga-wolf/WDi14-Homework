
require "pry"
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

def nucleos(core, times = 0)
  binding.pry
  sum = 0
  core.upcase.chars.each do |c|
    @dict.each do |k,v|
      if v.include? c
        sum += 1
      end
    end
  end

  sum
end



print "Please enter your Nucleotide: "
puts nucleos(gets.chomp)
#ACGT
