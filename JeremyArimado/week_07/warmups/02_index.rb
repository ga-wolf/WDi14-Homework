require 'pry'

# turn it into a luhn number
# make sure the sum of these integers is divisble by 10

class Luhn

    def initialize num
        @number = num
    end

    def luhnify
        digits = []

        @numbers.to_s.chars.reverse.each_with_index do |num, i|
            num.to_i
            num = num * 2 if i.even?
            num -= 9 if num >= 10
            digits << num
        end

        digits.reverse.inject(:+)
    end

    def valid?
        puts luhnify
    end
end

puts "Please eneter a number: "
number = gets.chomp
puts Luhn.new(number).valid?
