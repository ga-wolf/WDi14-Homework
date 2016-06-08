class Luhn

  def initialize num
    @number = num
  end

  def luhnify
    digits = []
    @number.to_s.chars.reverse.each_with_index do |num, i|
      num = num.to_i
      num = num * 2 if i.odd?
      num -= 9 if num >= 10

      digits << num
    end
    digits.reverse.inject(:+)
  end

  def valid?
    if luhnify % 10 == 0
      "This is a valid number"
    else
      num = luhnify * 10 + (10 + luhnify % 10)
      "This is not valid but #{num} is."
    end
  end
end

puts "Please enter a number: "
number = gets.chomp
puts Luhn.new(number).valid?
