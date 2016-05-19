def isNucleus(string)
    dna = ['a','c','g','t'];
    for i in dna
        if i == string
            return 1
        end
    end
    return 0
end

def findDNA(string)
    total_dna = 0;
    string.downcase.split("").each do |letter|
        total_dna += isNucleus(letter)
    end
    return total_dna
end

puts findDNA("ABCASDSCSPCUYSD");
