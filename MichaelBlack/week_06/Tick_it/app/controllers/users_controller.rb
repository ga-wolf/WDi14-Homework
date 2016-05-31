class UsersController < ApplicationController

  def index
    @users = User.all
  end

  def show
    @user = User.find params[:id]
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new user_params
    @user.save

    session[:user_id] = @user.id
    @current_user = @user
    flash[:success] = "Now logged in as #{@current_user.username}"

    redirect_to users_path
  end

  def edit
    @user = User.find params[:id]
  end

  def update
    user = User.find params[:id]
    if user.update user_params
      flash[:success] = "Details have been updated"
    else
      flash[:error] = "Password error, details unchanged"
    end

    redirect_to user
  end

  def destroy
    user = User.find params[:id]
    user.destroy

    redirect_to new_user_path
  end

  private
    def user_params
      params.require(:user).permit(:username, :email, :image, :password, :password_confirmation)
    end


end
