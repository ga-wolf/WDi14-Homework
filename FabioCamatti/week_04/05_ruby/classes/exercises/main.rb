# # Classes in Ruby: Exercises
#
# ## Your task
#
# Muck around with classes! We want you to use inheritance, methods and create instances.
#
# Choose one of the following inheritance models, or create your own:
#
# - Food ----> Fruit
# - Vehicle ----> Boat
# - ProgrammingLanguage ----> Ruby
# - Language ----> Esperanto
# - Or anything else...
#
# Make sure you add methods to all the classes you create, and call them on the instances!
#
# ### Extras
#
# - Try modelling more than one chain of inheritance. Fruit inherits from HealthyFood, which in turn inherits from Food
# - Research factory methods and try and implement them


require "pry"
class Food

  attr_accessor(:food_name)

  def initialize( food_name = "Food")
    @food_name = food_name
  end

end


class HealthyFood < Food
    attr_accessor :fruits, :last_name, :vice, :best_performance

    def initialize( first_name, last_name = "Marx", vice = "Being terrific", best_performance = "Duck Soup")
      @first_name = first_name
      @last_name = last_name
      @vice = vice
      @best_performance = best_performance
    end

end

class Fruit < HealthyFood


end

groucho = MarxBrother.new "Groucho"
zeppo = MarxBrother.new "Zeppo"
gummo = MarxBrother.new "Gummo"
harpo = MarxBrother.new "Harpo"
chico = MarxBrother.new "Chico"

binding.pry
puts""
