class UsersController < ApplicationController
  before_action :authorise, :only => [:index]

def index
  @users = User.all
end

def new
  @user = User.new
end

def create
  # This won't save it to the database!
  @user = User.new user_params

  # If it is able to be saved, show all of the users
  # Otherwise just render the form
  if @user.save
    redirect_to users_path
  else
    render :new
  end
end

def edit
  @user = @current_user
end

def update
  @current_user.update user_params

  redirect_to users_path
end

private
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation, :image)
  end

  def authorise
    # Unless someone is logged in, take every request back to the login page
    flash[:error] = "You need to be logged in for that" unless @current_user.present?
    redirect_to root_path unless @current_user.present? && @current_user.admin?
  end
end
