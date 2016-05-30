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
  region = Region.find_by :id => params[:review][:region_id]

  @review = Review.new review_params

  @review.avatar = params[:review][:avatar]

  @review.save!

  redirect_to region_path(region)
end

def edit
  @review = Review.find params[:id]
end

def update
  # region = Region.find_by :id => params[:review][:region_id]
  review = Review.find params[:id]
  review.update review_params

  redirect_to "/regions/#{review.region_id}"
end

def destroy
  # region = Region.find_by :id => params[:review][:region_id]
  review = Review.find params[:id]
  review.destroy

  redirect_to regions_path
end

private

def review_params
    params.require(:review).permit(:rating, :content, :user_id, :region_id)
end

end
