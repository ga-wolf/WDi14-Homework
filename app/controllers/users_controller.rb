class UsersController < ApplicationController


def index
  @users = User.all
end

def show
  @user = User.find_by :id => params[:id]
end

def new
  @user = User.new
end

def create
  @user = User.new user_params
  if @user.save
    redirect_to users_path
  else
    render :new
  end
end

def edit
  @user = User.find_by :id => params[:id]
end

def update
  user = User.find params[:id]
  user.update user_params if user.authenticate( params[:user][:password])

  redirect_to user
end

def destroy
  user = User.find params[:id]
  user.destroy

  redirect_to users_path
end

private

def user_params
  params.require(:user).permit(:name, :email, :password, :password_confirmation)
end

end