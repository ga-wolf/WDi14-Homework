class RegionsController < ApplicationController

def index
end

def show
end

def new
end

def create
end

def edit
end

def update
end

def destroy
end

private

def regions_params
  params.require(:region).permit(:name, :address, :description)
end

end
