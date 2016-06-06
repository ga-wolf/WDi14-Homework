
class EightballController < ApplicationController

  def index
    answer = ["Yup!", "Maybe", "Abosolutely", "Ask: what would an Australian do, then do the opposite", "Okole Maluna"]

    if !params[:question].nil?
      num = Random.new
      a = num.rand(answer.length)
      flash.now[:alert] = answer[a]
    end
  end
erb :index
end
