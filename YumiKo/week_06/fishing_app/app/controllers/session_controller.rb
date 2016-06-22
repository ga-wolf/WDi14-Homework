class SessionController < ApplicationController
  before_action :authenticate, :only => [:new]

  def new
  end

  def create
    user = User.find_by :email => params[:email]

    if user.present? && user.authenticate( params[:password] )
      session[:user_id] = user.id
      flash[:success] = "Successfully logged in"

      redirect_to user
    else
      flash[:error] = "Invalid email or password"
      redirect_to login_path
    end

  end

  def destroy
    session[:user_id] = nil
    flash[:success] = "Successfully logged out"
    redirect_to users_path
  end

  private
    def authenticate
      redirect_to users_path if @current_user
      # redirect_to :back if @current_user
    end

end
