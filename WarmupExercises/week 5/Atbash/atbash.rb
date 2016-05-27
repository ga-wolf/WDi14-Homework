class Atbash

  def initialize
    @plain = "abcdefghijklmnopqrstuvwxyz"
    @cipher = "zyxwvutsrqponmlkjihgfedcba"
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

  def encode_decode_elegant message
      result = ""
      a_ascii = 'a'.ord
      message.each_char do |c|
        # formula from wikipedia
        # c.ord - a_ascii converts the chars from ascii to start from 0 instead of 97
        # avoids using index, and notice that we don't use @plain or @cipher at all!
        cipher_char_ascii = -(c.ord - a_ascii + 1) % 26
        cipher_char = (cipher_char_ascii + a_ascii).chr
        result << cipher_char
      end
      result
  end
end

a = Atbash.new
e = a.encode_decode_elegant "test"
puts a.encode_decode_elegant e
