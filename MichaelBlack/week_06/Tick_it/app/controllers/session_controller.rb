class SessionController < ApplicationController
  before_action :authenticate, :only => [:new]

  def new
    #direct to login screen (new.html.erb)
  end

  def create
    #Process the login form
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
    #Destroy session detail
    session[:user_id] = nil
    flash[:success] = "Successfully logged out"
    redirect_to login_path
  end

  private
    def authenticate
      redirect_to users_path if @current_user
    end

end
