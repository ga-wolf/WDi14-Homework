class GamesController < ApplicationController

  def home
  end

  def magic
  end

  def magicresult
    @question = params[:question]

    num = rand(20)
    case num
    when 1 then @result = "It is certain"
    when 2 then @result = "It is decidedly so"
    when 3 then @result = "Without a doubt"
    when 4 then @result = "Yes, definitely"
    when 5 then @result = "You may rely on it"
    when 6 then @result = "As I see it, yes"
    when 7 then @result = "Most likely"
    when 8 then @result = "Outlook good"
    when 9 then @result = "Yes"
    when 10 then @result = "Signs point to yes"
    when 11 then @result = "Reply hazy try again"
    when 12 then @result = "Ask again later"
    when 13 then @result = "Better not tell you now"
    when 14 then @result = "Cannot predict now"
    when 15 then @result = "Concentrate and ask again"
    when 16 then @result = "Don't count on it"
    when 17 then @result = "My reply is no"
    when 18 then @result = "My sources say no"
    when 19 then @result = "Outlook not so good"
    when 20 then @result = "Very doubtful"
    end

  end

  def number
  end

  
end
