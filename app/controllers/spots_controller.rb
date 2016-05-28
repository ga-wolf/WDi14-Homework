class SpotsController < ApplicationController

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

def spots_params
  params.require(:spot).permit(:name, :address, :description)
end

end
