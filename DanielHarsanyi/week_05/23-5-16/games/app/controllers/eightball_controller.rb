class EightballController < ApplicationController

  def play
  end

  def answer
      @random_number = Random.new.rand(21..40)
      @answers = Eightball.all
  end

end
