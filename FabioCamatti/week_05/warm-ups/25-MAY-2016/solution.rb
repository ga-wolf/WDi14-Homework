class Strand

  def initialize dna_string
    @dna_string = dna_string
  end

  def hamming_distance other_string
    diff = 0
    @dna_string.each_char.with_index do |char, index|
      diff += 1 unless char == other_string[index]
    end
    diff
  end
end

s = Strand.new "GAGCCTACTAACGGGAT"
puts s.hamming_distance "CATCGTAATGACGGCCT"
