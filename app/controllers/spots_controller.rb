class SpotsController < ApplicationController


def index
@spots = Spot.all

end

def show

@spot = Spot.find_by :id => params[:id]

end

def new
  @spot = Spot.new
end

def create
end

def edit
  @spot = Spot.find_by :id => params[:id]
end

def update

end

def destroy
end

private

def spot_params
  params.require(:spot).permit(:name, :address, :description, :region_id)
end

end
