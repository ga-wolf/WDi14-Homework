
require 'pry-rails'

print "DNA 1: "
dna_1 = gets.chomp().split('');
p dna_1;
print "DNA 2: "
dna_2 = gets.chomp().split('');
p dna_2;


# split DNA's into array
# loop DNA1 with DNA 2, compare each index with each other

def checkHammingDistance(dna_1, dna_2)
    @count = 0;
    dna_1.each_with_index do |val, i|
        if(val != dna_2[i])
            @count += 1;
        end
    end
    puts @count
end

checkHammingDistance(dna_1, dna_2);
