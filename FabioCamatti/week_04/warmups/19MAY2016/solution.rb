#Sheriff
@nucleotides = {
   "A" => 0,
   "C" => 0,
   "G" => 0,
   "T" => 0
}

def count(dna_string)
    dna_string.chars.each do |char|
      value = @nucleotides[char]
      value++
    end
end

print "Please enter a DNA string "
count(gets.chomp)
