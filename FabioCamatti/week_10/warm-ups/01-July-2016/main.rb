class Crypto
  require "pry"
  def initialize(phrase)
    @phrase = phrase
  end


  def normalize
    @phrase.gsub(/\s+/, '')
  end

  def size
    @phrase.length
  end

  def segments
    segments = @phrase.length
    if segments % 2 == 0

    else
    end
  end
end

crypto = Crypto.new
puts crypto.normalize("If man was meant to stay on the ground god would have given us roots")
puts crypto.size
