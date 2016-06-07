class EightballController < ApplicationController

  def play
  end

  def answer
      @random_number = Random.new.rand(21..40) #first to last
      @answers = Eightball.all #find by
  end

end
