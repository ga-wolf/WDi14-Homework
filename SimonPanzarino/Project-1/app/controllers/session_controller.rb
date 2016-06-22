class SessionController < ApplicationController
  before_action :authenticate_user, :only => [:new]

  def new
  end

  def create
    # Find the user using params[:email]
    user = User.find_by :email => params[:email]

    if user.present? && user.authenticate(params[:password])
      flash[:success] = "Successfully logged in"
      session[:user_id] = user.id
      redirect_to login_path
    else
      flash[:error] = "Something went wrong"
      session[:user_id] = nil
      redirect_to login_path
    end
  end

  def destroy
    session[:user_id] = nil
    flash[:success] = "You have successfully logged out!"
    redirect_to login_path
  end

  private
    def authenticate_user
      redirect_to arts_path if @current_user.present?
    end
end
