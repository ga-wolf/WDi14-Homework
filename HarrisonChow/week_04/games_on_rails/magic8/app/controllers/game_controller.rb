class GameController < ApplicationController
  def index
  end

  def answer
    question= params[:question]
    if question.to_s.length > 10
      @answer = "yes"
    else
      @answer = "no"
    end

  end


end
