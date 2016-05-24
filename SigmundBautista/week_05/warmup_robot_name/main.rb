class Robot

  def initialize
    @name = generate_name


  end

  def generate_name
    @name = "#{generate_letters} #{generate_numbers}"

  end

  def generate_letters
    letters = ("A" .. "Z").to_a.sample(2)

  end

  def generate_numbers
    numbers = (1 .. 9).to_a.sample(3)
  end

  def name
    @name
  end

end


Robot.new
puts r.name
