class AuthorsController < ApplicationController
  def index
    @authors = Author.all
  end

  def show
    @author = Author.find params[:id]
  end

  def edit
    @author = Author.find params[:id]
  end

  def new
    @author = Author.new
  end

  def create
    author = Author.create author_params

    redirect_to authors_path
  end

  def update
    author = Author.find params[:id]
    author.update author_params

    redirect_to "/authors/#{author.id}"
  end

  def destroy
    author = Author.find params[:id]
    author.destroy

    redirect_to '/authors'
  end

  private
    def author_params
      params.require(:author).permit( :name, :nationality, :dob, :alive, :image )
    end
end
