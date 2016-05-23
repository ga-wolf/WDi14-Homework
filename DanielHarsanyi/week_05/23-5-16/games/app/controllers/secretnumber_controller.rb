class SecretnumberController < ApplicationController

  def play
  end

  def answer
    @user_number = params[:user_num].to_i
    @computer_number = rand(1..10).to_i
  end
end
