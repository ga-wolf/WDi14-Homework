class UsersController < ApplicationController
  # Run the authorise method on every request that goes to index
  before_action :authenticate_user, :only => [:index, :show, :edit, :update]
  before_action :check_admin, :only => [:index]
  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def show
    @user = User.find params[:id]
  end

  def create
    # This wont save it to the database
    @user = User.new user_params

    # If it is able to be saved, show all of the users
    # Otherwise just render the form
    if @user.save
      redirect_to arts_path
    else
      render :new
    end
  end

  def edit
    @user = @current_user
  end

  def update
    @current_user.update user_params

    redirect_to arts_path
  end

  private
    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation, :image)
    end

    def authenticate_user
      flash[:error] = "You need to be logged in for that" unless @current_user.present?
      redirect_to home_path unless @current_user.present?
    end

    def check_admin
      redirect_to home_path unless @current_user.present? && @current_user.admin?
    end

end
