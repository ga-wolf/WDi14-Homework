class SpotsController < ApplicationController


def show
  # binding.pry
@spot = Spot.find params[:id]
@hash = Gmaps4rails.build_markers(@spot) do |spot, marker|
  marker.lat spot.lat
  marker.lng spot.lng
end
end

def new
  @spot = Spot.new
end

def create
  @spot = Spot.new spot_params
  @spot.region_id = params[:region_id]
  @spot.save!

  redirect_to @spot.region
end

def edit
  @spot = Spot.find params[:id]
end

def update
  spot = Spot.find params[:id]
  spot.update spot_params

  redirect_to spot.region
end

def destroy
  spot = Spot.find params[:id]
  region = spot.region
  spot.destroy

  redirect_to region
end

private

def spot_params
  params.require(:spot).permit(:name, :address, :description)
end

end
