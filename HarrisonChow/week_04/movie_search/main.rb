require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :home
end

get '/searching' do
  movie_get = params[:movie_title]
  movie_all_info = HTTParty.get( "http://www.omdbapi.com?s=#{movie_get}" )
  if movie_all_info["Response"] == true
    if movie_all_info["Search"].length == 1
      movie_id = movie_all_info["Search"][0]["imdbID"]
      redirect "/movies/#{movie_id}"

    elsif movie_all_info["Search"].length > 1
      @movie_list = movie_all_info["Search"]
      erb :list
    end
  else
    erb :error
  end
end
# binding.pry
get '/search' do
  erb :search
end

get '/movies/:id' do
  movie_id = params[:id]
  movie_all_info = HTTParty.get( "http://www.omdbapi.com?i=#{movie_id}" )
  @movie_title = movie_all_info["Title"]
  @movie_year = movie_all_info["Year"]
  @movie_Genre = movie_all_info["Genre"]
  @movie_time = movie_all_info["Runtime"]
  @movie_Director = movie_all_info["Director"]
  @movie_Actors = movie_all_info["Actors"]
  @movie_Plot = movie_all_info["Plot"]
  @movie_Country = movie_all_info["Country"]
  @movie_img = movie_all_info["Poster"]
  erb :result
end
#
# get '/error.erb' do
#   erb :error
# end
