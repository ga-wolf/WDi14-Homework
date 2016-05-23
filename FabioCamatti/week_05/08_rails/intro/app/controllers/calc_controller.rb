class CalcController < ApplicationController

  def calculate
    @x = params[:x].to_f
    @y = params[:y].to_f
    @operator = params[:operator]

    @result = case @operator
    when "+" then @x + @y
    when "-" then @x - @y
    when "*" then @x * @y
    when "divide" then @x / @y
    when "**" then @x ** @y
    end
  end
end
