class UsersController < ApplicationController

    before_action :authorise, :only => [:index];

  def index
        @current_user = User.find(session[:user_id]);
        @users = User.all
  end

  def edit
      @user = User.find(session[:user_id]);
  end

  def update
       @current_user.update(user_params)
       redirect_to(users_path);
  end

  def new
      @user = User.new
  end

  def create
      @user = User.new(user_params);

      #if saved in database
      if(@user.save)
          redirect_to(users_path);
      else
          render :new
      end

  end

  private
    def user_params
        params.require(:user).permit(:email, :password, :password_confirmation, :image);
    end

    def authorise
        flash[:error] = "YOUR NOT LOGGED IN" unless @current_user.present?
        redirect_to(login_path) unless @current_user.present?
    end

end
