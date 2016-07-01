class Crypto
  def initialize(str)
    @str = str
  end

  def normalize_plaintext
    @str.downcase.gsub(/[^1-9a-z]/, "")
  end

  def size
    Math.sqrt(normalize_plaintext.length).ceil
  end

  def plaintext_segments
    normalize_plaintext.scan(/.{1,#{size}}/)
  end

  def ciphertext
    cipher = ""
    for i in 0..size
      plaintext_segments.each do |segment|
        cipher << segment[i] if segment[i]
      end
    end

    cipher.scan(/.{1,5}/).join(" ")
  end

end

crypto = Crypto.new("Have a nice day. Feed the dog & chill out!")
puts crypto.normalize_plaintext
puts crypto.size
p crypto.plaintext_segments
puts crypto.ciphertext
