clas Atbash

  def initialize
    @plain = "abcdefghijklmnopqrstuvwxyz"
    @cipher = "zyxwvutsrqponmlkjihgfedcba"


  end


  def encode_decode message
    result = ""
    message.each_char do |c|
      index = @plain.index c
      cipher_char = [@cipher]
      result << cipher_char
    end
  end
end

a = Atbash.new
puts a.encode "text"
