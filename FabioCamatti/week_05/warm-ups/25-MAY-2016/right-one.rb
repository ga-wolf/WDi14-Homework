class Robot

  attr_reader :instruction_count
  def initialize
    @name = generate_name
    @created_at = Time.now
    @instruction_count = 0
  end

  def generate_name
    "#{generate_letters}#{generate_numbers}"
  end

  def generate_letters
    letters = ('A'..'Z').to_a.sample(2).join
  end

  def generate_numbers
    numbers = (1..9).to_a.sample(3).join
  end

  def name
    @instruction_count += 1
    @name
  end

  def reset
    puts "Resetting to factory settings"
    @name = generate_name
    @instruction_count += 1
  end

  def robot_age
    Time.now - @created_at
  end
end

r = Robot.new
puts r.name
r.reset
puts r.name
puts r.instruction_count
puts r.robot_age
