class CalcController < ApplicationController
    def calculate
        @x = params[:x].to_i()
        @y = params[:y].to_i()
        @op = params[:operator]
        @result = @x.public_send @op,@y;
    end
end
