class PagesController < ApplicationController
  def numbers
    @price = 22424.15
    @large_number = 13879889898989
    @phone_number = 2125551212
  end

  def text
    @numbers = (1..50).to_a.shuffle
    @friends = 1
    @enemies = 1212
    @fairytale = "A very very long time ago" * 15
  end

  def railsassets

  end

  def url
    @single_number = 10
    @x = 5
    @y = 9

  end

  def home

  end

  def random
  end

  def single_number
    # binding.pry
  end

  def two_numbers
    # binding.pry
  end

  def date
    @date
  end
  
end
