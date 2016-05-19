@nucleotides = {
  "A" => 0,
  "C" => 0,
  "G" => 0,
  "T" => 0
}
@nucleotides.default = 0

# @nucleotides = new Hash(0)

def count(dna_string)
  dna_string.upcase.chars.each do |char|
    return nil unless @nucleotides.include? char
  #  @nucleotides[char] = @nucleotides[char] + 1
    @nucleotides[char] += 1
  end

  @nucleotides
end

def print_hash
  @nucleotides.each do |char, count|
    puts "#{char} => #{count}"
  end
end

print "Please enter a DNA string "
if !count(gets.chomp)
  puts "Please enter a correct DNA String"
  exit
end

print_hash
