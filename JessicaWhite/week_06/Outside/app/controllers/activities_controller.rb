class ActivitiesController < ApplicationController

  def index
    @activities = Activity.all
  end

  def new
    @activity = Activity.new
  end

  def create
    @activity = Activity.new activity_params

    unless params[:file].nil?
      cloudinary = Cloudinary::Uploader.upload params[:file]
      @activity.image = cloudinary["url"]
    end

    if @activity.save
      redirect_to activities_path
    else
      render :new
    end
  end

  def show
    @activity = Activity.find params[:id]
  end

  def edit
    @activity = Activity.find params[:id]
  end

  def update
    @activity = Activity.find params[:id]

    cloudinary = Cloudinary::Uploader.upload params[:file] if params[:file]

    activity = Activity.find params[:id]
    activity.image = cloudinary["url"] if cloudinary

    activity.update activity_params

    redirect_to activity
  end

  def destroy
    activity = Activity.find params[:id]
    activity.destroy

    redirect_to activities_path
  end

  private
  def activity_params
    params.require(:activity).permit(:title, :image, :equipment_list, :description, :user_id, :destination_id)
  end

end
