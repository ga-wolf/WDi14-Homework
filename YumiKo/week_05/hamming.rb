require 'pry'

#check if the elem of dna1 and dna2 in the same index is equal or not. If that is same, add the number to 'distance'

class Hamming

def count ( dna1, dna2 )
  dna1_a=dna1.split("")
  dna2_a=dna2.split("")
  distance = 0
  dna1_a.each_with_index do |e,i|
    if e != dna2_a[i]
      distance += 1
  # binding.pry
    end
  end
  puts distance
end
# binding.pry

end

strand = Hamming.new

strand.count "GAGCCTACTAACGGGAT", "CATCGTAATGACGGCCT"
