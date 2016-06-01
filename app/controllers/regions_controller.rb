class RegionsController < ApplicationController

def index
  @regions = Region.order(:id)

end

def show
  @region = Region.find params[:id]

  @spots = @region.spots.order(:id)
  @reviews = @region.reviews.order(:id)
  rating_sum = 0
  @reviews.each do |r|
    rating_sum += r.rating
  end
  if @reviews.length != 0
    @rating_avg = (rating_sum/@reviews.length).round(1)
  else
    @msg = "Be the first rater"
  end

  @review = Review.new

  @hash = Gmaps4rails.build_markers(@spots) do |spot, marker|
    marker.lat spot.lat
    marker.lng spot.lng
  end
end

def new
  @region = Region.new
end

def create
  @region = Region.create region_params

  redirect_to regions_path
end

def edit
  @region = Region.find params[:id]
end

def update
  region = Region.find params[:id]
  region.update region_params

  redirect_to region
end

def destroy
  region = Region.find params[:id]
  region.destroy

  redirect_to regions_path
end

private

def region_params
  params.require(:region).permit(:name, :address, :description)
end

end
