class SecretNumberController < ApplicationController

  def index
    x = params[:x].to_i
    if  x.between?(1,10)
      y = ['win','lose'].sample
      render y
    else
       render 'index'
     end
  end

  def win
  end

  def lose
  end

end
