class ReviewsController < ApplicationController


def index
  @reviews = Review.all
end

def show
  @review = Review.find params[:id]

end

def new
  @review = Review.new
end

def create
  # @region = Region.find :id => params[:region_id]
@review = Review.create review_params

binding.pry
redirect_to regions_path
end

def edit
  @review = Review.find params[:id]
end

def update

end

def destroy
end

private

def review_params
    params.require(:review).permit(:rating, :content, :user_id, :region_id)
end

end
