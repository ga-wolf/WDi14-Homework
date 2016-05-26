class PagesController < ApplicationController

def home
end

def magicball
end

def magicball_result
  # raise 'hell'
  @question = params[:question]
  answers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Most likely",
    "Ask again later",
    "Cannot predict now",
    "Don't count on it",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ]
  @result = answers[rand(10)]

end

def secretnumber
end

def decide
  user_choice = params[:number].to_i
  random_number = rand(9) + 1
  # raise 'hell'

  if user_choice == random_number
    redirect_to "/secretnumber/win"
  else
    redirect_to "/secretnumber/lose"
  end
end

def win
end

def lose
end


end
