class SessionController < ApplicationController
  before_action :authenticate_user, :only => [:new]

  def new
  end

  def create
    @user = User.find_by :email => params[:email]

    # If there was a user in the database with the right email, and the encrypted form of the password that was typed in is equal to the password_digest of this particular user
    if @user.present? && @user.authenticate( params[:password] )
      flash[:success] = "User successfully logged in"
      session[:user_id] = @user.id
      redirect_to products_path
    else
      flash[:error] = "Your password or email was incorrect"
      redirect_to login_path
    end
  end

  def destroy
    session[:user_id] = nil
    flash[:success] = "User successfully logged out"
    redirect_to login_path
  end

  private
    def authenticate_user
      redirect_to users_path if @current_user.present?
    end
end
