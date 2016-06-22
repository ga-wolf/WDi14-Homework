require 'pry'

# 1 = wink
# 10 = double blink
# 100 = close your eyes
# 1000 = jump
#
# 10000 = Reverse the order of the operations in the secret handshake.

# loop till you hit one a one
# then slice from that to the beginning and analyse
# then


class Handshake
    def initialize num
        @number = num
    end

    def translate
        digits = []
        @numbers.to_s.chars.reverse.each_with_index do |num, i|
            digits << num
        end
    end

end
