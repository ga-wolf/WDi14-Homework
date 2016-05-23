class SecretController < ApplicationController
  def index

  end

  def result
    guess_number = params[:name]
    result_number = rand(1 .. 10)
    if guess_number == result_number
      @message = "Congratulations! You are the winner. The result is #{result_number}"
    else
      @message = "Sorry.You got the wrong number. You choosed #{guess_number}. The result is #{result_number}. "

    end

  end
end
