class MagicController < ApplicationController

  def index

  end

  def question

  end

  def answer
    @question = params["question"]
    random_number = 1+rand(6)

    case random_number
    when 1
        @answer = "Who Says You're Stupid?"
      when 2
        @answer = "Ask Me If I Care"
      when 3
        @answer = "Yeah And I'm The Pope"
      when 4
        @answer = "Pure Genius!"
      when 5
        @answer = "Obviously"
      when 6
        @answer = "Your Breath Is So Minty"
      end
    end

end
