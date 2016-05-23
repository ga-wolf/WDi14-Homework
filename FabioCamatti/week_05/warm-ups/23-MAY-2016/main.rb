require "pry"
class Convertion

  def initialize
    @roman_mappings = {
                        1000 => 'M',
                        900 => 'CM',
                        500 => 'D',
                        400 => 'CD',
                        100 => 'C',
                        90 => 'XC',
                        50 => 'L',
                        40 => 'XL',
                        10 => 'X',
                        9 => 'IX',
                        5 => 'V',
                        4 => 'IV',
                        1 => 'I'
                      }

  end

def roman(number)
  binding.pry
  if  !(number > 0 && number < 4000)
        puts "Number must be between 1 and 3999"
  end

    ints = (1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1)
    nums = ('M', 'CM', 'D', 'CD','C','XC','L','XL','X','IX','V','IV','I')
    result = []

    ints.each do |i|
        count = int(number / ints[i])
        result.append(nums[i] * count)
        input -= ints[i] * count
    return ''.join(result)
  end

end
end

print "Please enter a Roman numeral: "
puts roman(gets.chomp)
