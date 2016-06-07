class PagesController < ApplicationController
    def numbers
      @price = 123.123
      @large_number = 123123123123123123
      @phone_number = 2125551212
    end

    def text
      @numbers = (1..50).to_a().shuffle()
      @friends = 1
      @enemies = 1212
      @fairytale = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    end

    def date
        
    end

    def railsassets
    end

    def url
        @single_number = 5;
        @x = 1;
        @y = 9;
    end

    def home
    end

    def random
    end

    def single_number
    end

    def two_numbers
    end

end
