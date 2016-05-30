class RegionsController < ApplicationController

def index
  @regions = Region.all

end

def show

  @region = Region.find params[:id]

  @review = Review.new

  @reviews = Review.all

# binding.pry

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
