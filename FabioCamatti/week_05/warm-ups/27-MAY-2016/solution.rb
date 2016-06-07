#EASY SOLUTION

class Atbash

  def initialize
    @plain = 'abcdefghijklmnopqrstuvwxyz'
    @cipher = 'abcdefghijklmnopqrstuvwxyz'
  end

    def encode_decode message
      result = ""
      message.each_char do |c|
        index = @plain.index c
        cipher_char = @cipher[index]
        result << cipher_char
    end
    result
end

  a = Atbash.new
  e = a.encode_decode "test"
  puts a.encode_decode "test" e
