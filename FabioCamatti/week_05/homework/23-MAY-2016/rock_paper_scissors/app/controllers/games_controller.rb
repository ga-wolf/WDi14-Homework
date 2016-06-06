class GamesController < ApplicationController

  def index
  end

  def  rock_paper_scissors_play
    @user_choice = params[:throw]
    @machine_choice  = ['rock', 'paper', 'scissors'].sample
    # binding.pry
    if @user_choice == @machine_choice
      render ('win')
    else
      render ('lose')
    end
  end



end
