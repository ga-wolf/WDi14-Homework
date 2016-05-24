# "I" = 1
# "IV" = 4
# "V" = 5
# "IX" = 9
# "X" = 10
# "XL" = 40
# "L" = 50
# "XC" = 90
# "C" = 100
# "CD" = 400
# "D" = 500
# "CM" = 900
# "M" = 1000

roman_numeral = 3000


class RomanNumeral
  def roman_mapping
    {
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

  def to_roman
    result = ""

    roman_mappings.each do |arabic, roman|
      while num >= arabic
        result << arabic
        num -= arabic
      end
    end
    result
  end

end

r = RomanNumeral.new
puts r.to_roman 2000
