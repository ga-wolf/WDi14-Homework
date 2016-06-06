# Naming the class. The name starts with UpperCamelCase

require "pry"

class MarxBrother

  attr_writer( :first_name, :last_name, :vice, :best_performance )

  def initialize( first_name, last_name  = "Marx", vice  = "Being terrific", best_performance = "Duck Soup")
    @first_name = first_name
    @last_name = last_name
    @vice = vice
    @best_performance = best_performance
  end

  def full_name
    "#{@first_name} #{@last_name}"
  end

  # attr_reader JUST GETTERS
  # attr_writer JUST SETTERS
  # attr_accessor BOTH GETTERS AND SETTERS

  # # Setter
  # def first_name=( name )
  #   @first_name = name
  # end
  #
  # # Getter
  # def first_name
  #   @first_name
  # end
  #
  # def last_name=( name )
  #   @last_name = name
  # end
  #
  # def last_name
  #   @last_name
  # end
  # # Setter
  # def best_performance=( movie )
  #   @best_performance = movie
  # end
  #
  # # Getter
  # def best_performance
  #   @best_performance
  # end
  #
  # def vice=( vice )
  #   @vice = vice
  # end
  #
  # def vice
  #   @vice
  # end

  def indentify
    "I am #{@first_name} #{@last_name}, I was great in #{@best_performance}. I love #{@vice}"
  end

  def act
    "Amazing"
  end
end

m = MarxBrother.new "Groucho", "Marx", "The Three Stooges", "Cigars"
# m.first_name=( "Groucho" )
# m.last_name=("Marx")
# m.best_performance=("The Three Stooges")
# m.vice = "Cigars"
p m.indentify

zeppo = MarxBrother.new "Zeppo", "Marx", "Duck Soup", "Guitars"
# zeppo.first_name=( "Zeppo" )
# zeppo.last_name=("Marx")
# zeppo.best_performance=("Duck Soup")
# zeppo.vice = "Guitars"
p zeppo.indentify

class Dog
  attr_accessor :breed, :name, :fur_colour

  def initialize( breed, name, fur_colour)
    @breed = breed
    @name = name
    @fur_colour = fur_colour
  end
end


# tammy = Dog.new
# tammy.breed = "Tamaskan"
# tammy.name = "Tammy"
# tammy.fur_colour = "Black"

buddy = Dog.new "Labrador", "Buddy", "Golden"
# buddy.breed = "Labrador"
# buddy.name = "Buddy"
# buddy.fur_colour = "Golden"

binding.pry
puts ""
