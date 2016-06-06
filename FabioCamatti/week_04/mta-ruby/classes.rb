require "pry"

class Warrior

  def initialize(name, clan, strength, dexterity)
    @name = name
    @clan = clan
    @strength = strength
    @dexterity = dexterity

  end

  def about
    puts "#{@name} is a Warrior from the #{@clan} clan. Strength: #{@strength} Dexterity: #{@dexterity}"
  end


    $warrior_info = puts "A fighter. A warrior has higher than normal strength. They never back down, never surrender"

end

player_1 = Warrior.new("Raze", "WhiteFox", 23,21)
player_2 = Warrior.new("Bazerk", "RedFang", 19,31)

player_1.about

$warrior_info
