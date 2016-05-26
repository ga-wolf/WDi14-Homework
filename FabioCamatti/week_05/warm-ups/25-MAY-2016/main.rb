require "pry"

class  Hamming

   def distance (seq1, seq2)

     if seq1 == seq2
        puts "The Hamming distance is 0"
        return
    elsif seq1 != seq2
        diff = 0
        if seq1.length == seq2.length
          seq1.each_char.with_index do |char, index|
            diff += 1 unless char == seq2[index]
          end
        else
            puts "The DNA lengths are not equal. Review your data."
         end
         if diff == 0
           print " "
         else
           diff
         end

     end

   end

 end

d = Hamming.new
puts d.distance("fabio", "fabo")
puts d.distance("GAGCCTACTAACGGGAT", "CATCGTAATGACGGCCT")
