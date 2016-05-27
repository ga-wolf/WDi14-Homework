class SecretnumController < ApplicationController


  def secretnum
  end


  def user
    @user_num = params[:user_num].to_i
  end

  def server_number
  numbers = (1..10).to_a.sample(1).to_i
  @server_num = params[:numbers]
end

# def result
#   if @user_num = @server_num
#
#   end

end
