class SessionController < ApplicationController

  before_action :authenticate_user, :only => [:new]

  def new

  end

  def create
    @user = User.find_by :email => params[:email]

    if @user.present? && @user.authenticate( params[:password] )

      flash[:sucess] = "User successfully logged in"
      session[:user_id] = @user.id
      redirect_to login_path
    else
      flash[:error] = "Your password or email was incorret"
      redirect_to login_path
    end

  end

  def destroy
    session[:user_id] = nil
    flash[:sucess] = "User successfully logged out"
    redirect_to login_path
  end

  private
  
    def authenticate_user
      redirect_to users_path if @current_user.present?
    end


end
