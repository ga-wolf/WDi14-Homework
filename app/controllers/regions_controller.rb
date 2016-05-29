class RegionsController < ApplicationController

def index
@regions = Region.all

end

def show

@region = Region.find params[:id]

end

def new
  @region = Region.new
end

def create
end

def edit
  @region = Region.find params[:id]
end

def update


end

def destroy
end

private

def region_params
  params.require(:region).permit(:name, :address, :description)
end

end
