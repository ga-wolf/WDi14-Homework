class GamesController < ApplicationController

  def index

  end

  def rock_paper_scissors_play
    player = params[:name]
    computer = ["paper","rock", "scissors"].sample
    case
    when player == computer
      @message = "Draw"
    when player == "rock" && computer == "paper"
      @message = "Computer win!"
    when player == "rock" && computer == "scissors"
      @message = "Player win!"
    when player == "rock" && computer == "paper"
      @message = "Computer win!"
    when player == "paper" && computer == "scissors"
      @message = "Computer win!"
    when player == "paper" && computer == "rock"
      @message = "Player win!"
    when player == "scissors" && computer == "rock"
      @message = "Computer win!"
    when player == "scissors" && computer == "paper"
      @message = "Player win!"
    end



  end
end
