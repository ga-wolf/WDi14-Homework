class UsersController < ApplicationController
  def index
    # @user = User.find params[:id]
    redirect_to root_path
  end

  def new
    @user = User.new
  end

  def create
    cloudinary = Cloudinary::Uploader.upload params[:file], :angle => :exif

    @user = User.new user_params
    @user.image = cloudinary["url"]
    if @user.save
      redirect_to users_path
    else
      render :new
    end
  end

  def show
    @user = User.find params[:id]
    # @user = @current_user
  end

  def edit
    @user = User.find params[:id]
  end

  def update
    cloudinary = Cloudinary::Uploader.upload params[:file], :angle => :exif

    user = User.find params[:id]
    user.image = cloudinary["url"] if cloudinary

    user.update user_params if user.authenticate( params[:user][:password] )

    redirect_to user
  end

  def destroy
    user = User.find params[:id]
    user.destroy

    redirect_to users_path
  end

  private
  def user_params
    params.require(:user).permit(:email, :username, :image, :name, :password, :password_confirmation, :activity_id, :destination_id)
  end
end
