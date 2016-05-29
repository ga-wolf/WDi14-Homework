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
end

def edit
  @review = Review.find params[:id]
end

def update

end

def destroy
end


end
