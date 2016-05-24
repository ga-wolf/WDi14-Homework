require "pry"
class Robot
  def initialize(name)
    @name = name
  end

  def name
    @name
  end
end

puts "Robot 1: "
robot1 = Robot.new("Baxter")
# binding.pry
puts robot1.name
puts robot1.name
puts robot1.name

puts "Robot 2: "
robot2 = Robot.new("Sawer")
puts robot2.name
puts robot2.name
puts robot2.name
