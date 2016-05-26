class MagicballController < ApplicationController
  def index

  end

  def question
     @question = params[:question]
     if !@question.blank?
         answer = rand(1..2)
         answer == 1 ? @answer = "Yes" : @answer = "No"
     else
        @answer = "You haven't made a valid question"
     end
  end

end
