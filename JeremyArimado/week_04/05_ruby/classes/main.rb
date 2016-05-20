require 'pry'



class Human
    def say_something
        puts 'hi'
    end
end


class MarxBrother < Human # INHERITANCE

    attr_writer();    # JUST WRITE
    attr_reader();    # JUST READ
    attr_accessor();  # READ AND WRITE

    def act
        "Amazing"
    end

    def self.thing
        # does somtthing
    end


    # THIS WILL RUN ON INITIALISE
    def initialize( param, param2 , param3 = 'default value'); # can pass in an object
        @param = param
        @param2 = param2
        @param3 = param3 # has default value of nothing input
    end
end

groucho = MarxBrother.new(param, param2);

g = MarxBrother.new(p1, p2, p3 fuuuuuc)

# SCOPE ------------------------------------------

# INSTANCE VARIABLES
# @var_name - availble on the instane of the class

# CLASS VARIABLES
# @@var_name - available on all classes

# GLOABAL
# $var_name -
