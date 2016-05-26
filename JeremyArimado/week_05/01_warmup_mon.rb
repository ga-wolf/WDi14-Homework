# each range has 3 cases
# - 1-3 : before the break
# - 4 : at the break
# - 5-8 : after the break
# - 9 : break number 2
#
# Break all numbers in array
#
# break them into ranges
#
# 1990
#
# R1 - 0    : nothing
# R2 - 90   : XC
# R3 - 900  : CM
# R4 - 1000 : M
#
# MCMXC

ranges = {
    "3" => ['I', 'XV', 'V','IX'],   # 1 - 10
    "2" => ['X', 'XL', 'L', 'XC'],  # 10 - 100
    "1" => ['C', 'CD', 'D', 'CM'],   # 100 - 900
    "0" => ['M']
}

def getRomans (year)
    yearArr = year.split('');
    i = 0;
    while i <= yearArr.length - 1 do
        
        p "#{i}: #{yearArr[i]}"
            # if number is < 3
            # if number is = 4
            # if number is = 5
            # if number is > 5 && number is < 9
        i += 1;
    end
end

puts 'WHAT YEAR IS IT?';

year = gets.chomp();

getRomans(year);
