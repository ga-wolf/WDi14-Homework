# - Food ----> Fruit
require "pry"

 class Food
   def consumable
     true
   end
 end

f = Food.new

 class Fruit < Food
   def healthy
     true
   end
 end

 mango = Fruit.new
 # binding.pry


 # Vehicle ----> Boat

 class Vehicle
   def can_move?
     true
   end
 end

 class Boat < Vehicle
   def move_on_water?
     true
   end
 end

  binding.pry
