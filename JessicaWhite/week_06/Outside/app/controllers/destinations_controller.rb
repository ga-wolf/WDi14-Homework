class DestinationsController < ApplicationController
  def index
    if params[:search].present?
      @destinations = Destination.near(params[:search]).group_by { |d| d.country }
      # [destination1, destination2]
    else
      @destinations = Destination.all.group_by { |d| d.country }
      # { "Australia" => [destination1, destination2] }
    end
  end

  def new
    @destination = Destination.new
    @activities = Activity.all
  end

  def create
    @destination = Destination.new destination_params

    unless params[:file].nil?
      cloudinary = Cloudinary::Uploader.upload params[:file]
      @destination.image = cloudinary["url"]
    end

    params[:destination][:activity_ids].shift
    activity_ids = params[:destination][:activity_ids]

    activity_ids.each do |a|
      x = Activity.find a
      @destination.activities << x unless @destination.activities.include? x
    end

    if @destination.save
      redirect_to destinations_path
    else
      render :new
    end
  end

  def show
    @destination = Destination.find params[:id]
    @activities = Activity.all
  end

  def edit
    @destination = Destination.find params[:id]
    @activities = Activity.all
  end

  def update
    @destination = Destination.find params[:id]

    @destination.activities.delete_all

    params[:destination][:activity_ids].shift
    activity_ids = params[:destination][:activity_ids]

    activity_ids.each do |a|
      x = Activity.find a
      @destination.activities << x unless @destination.activities.include? x
    end

    cloudinary = Cloudinary::Uploader.upload params[:file] if params[:file]

    # destination = Destination.find params[:id]
    @destination.image = cloudinary["url"] if cloudinary

    @destination.update destination_params


    redirect_to @destination
  end

  def destroy
    destination = Destination.find params[:id]
    destination.destroy

    redirect_to destinations_path
  end

  private
  def destination_params
    params.require(:destination).permit(:address, :country, :image, :title, :description, :terrain, :user_id, :activity_id, :activity_ids)
  end
end
