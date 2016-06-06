class GamesController < ApplicationController

  def answer
    answers = ["It is certain", "It is decidedly so", "Without a doubt", "Without a doubt",
      "Yes, definitely", "You may rely on it", "As I see it, yes", "Most likely",
      "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later",
      "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it",
      "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]

    random_num = rand(21)

    @reply = answers[random_num]
    
  end

  def secret_number_answer
    @secret_num = rand(10)
    @message = "hello"
    if params[:answers] == @secret_num
      @message = "Winner winner chicken dinner"
    else
      @message = "Try again"

    end
  end

end
