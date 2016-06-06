def plingplangplong ( n )
    if n % 3 === 0
        pling = 'Pling'
    end
    if n % 5 === 0
        plang = 'Plang'
    end
    if n % 7 === 0
        plong = 'Plong'
    end
    puts "#{pling}#{plang}#{plong}";
end

print "Give me a number: "
userInput = gets().chomp().to_i();
puts plingplangplong(userInput);
