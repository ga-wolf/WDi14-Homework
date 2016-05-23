class RockpaperscissorController < ApplicationController

  def play
  end

  def answer
    @user_move = params[:move]
    @computer_random_num = rand(1..3).to_i
    @computer_move;
  end

end
