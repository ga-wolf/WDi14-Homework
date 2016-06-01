require 'pry'

def converter numbers
  first_digit_list =
    {
      0 => "",
      1 => "I",
      2 => "II",
      3 => "III",
      4 => "IV",
      5 => "V",
      6 => "VI",
      7 => "VII",
      8 => "VIII",
      9 => "IX"
    }
  second_digit_list =
    {
      0 => "",
      1 => "X",
      2 => "XX",
      3 => "XXX",
      4 => "XL",
      5 => "L",
      6 => "LX",
      7 => "LXX",
      8 => "LXXX",
      9 => "XC"
    }
  third_digit_list =
    {
      0 => "",
      1 => "C",
      2 => "CC",
      3 => "CCC",
      4 => "CD",
      5 => "D",
      6 => "DC",
      7 => "DCC",
      8 => "DCCC",
      9 => "CM"
    }
  fourth_digit_list =
    {
      1 => "M",
      2 => "MM",
      3 => "MMM"
    }

  splited_num = numbers.split("")
  list = []
  list.push(first_digit_list[splited_num.pop.to_i])
  list.unshift(second_digit_list[splited_num.pop.to_i])
  list.unshift(third_digit_list[splited_num.pop.to_i])
  list.unshift(fourth_digit_list[splited_num.pop.to_i])
  binding.pry

  puts list.join
end

converter(gets.chomp)
