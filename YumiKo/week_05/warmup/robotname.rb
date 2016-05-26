require 'pry'

random_name = ([*('A'..'Z')].sample(2) + [*(1..9)].sample(3)).join

class Robot
  attr_reader :instruction_counter
  def initialize
    @name = generate_name
    @create_at = Time.now
    @instruction_counter = 0
  end

  def generate_name
    @name = "#{generate_letters}#{generate_numbers}"
    # random_name = ([*('A'..'Z')].sample(2) + [*(1..9)].sample(3)).join
  end

  def generate_letters
    letters = ('A'..'Z').to_a.sample(2).join
  end


  def generate_numbers
    numbers = (1..9).to_a.sample(3).join
  end

  def name
    @instruction_counter +=1
    @name

  end

  def reset
    puts "Resetting to factory settings"
    @name = generate_name
    # random_name = ([*('A'..'Z')].sample(2) + [*(1..9)].sample(3)).join
    @instruction_counter += 1
  end

  # def mac_address
  #
  # end

  def robot_age
    Time.now - @created_at
  end
end


robot1 = Robot.new
puts robot1.name
robot2 = Robot.new
puts robot2.name

binding.pry
