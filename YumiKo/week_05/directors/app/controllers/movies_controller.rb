class MoviesController < ApplicationController


  def index
    @movies = Movie.all
    # binding.pry

  end


  def new
    @movie = Movie.new
  end


  def show
    @movie = Movie.find params[:id]
  end

  def create
    movie = Movie.create movie_params

    redirect_to movies_path
  end

  def edit
    @movie = Movie.find params[:id]

  end

  def update
    movie = Movie.find params[:id]
    movie.update movie_params

    redirect_to movie
  end

  def destroy
    # binding.pry

    movie = Movie.find params[:id]
    movie.destroy

    redirect_to movies_path
  end

  private

    def movie_params
      params.require(:movie).permit(:title, :poster, :year, :genre, :running_time, :description, :director_id)
    end


end
