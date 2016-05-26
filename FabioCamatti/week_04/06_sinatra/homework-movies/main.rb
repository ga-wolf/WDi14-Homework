require "pry"
require "sinatra"
require "sinatra/reloader"
require 'httparty' # Example HTTParty.get( "http://www.omdbapi.com?s=Satantango" ) returns an object in json


get '/' do
  erb :home
end

get '/movie' do
  @movie = params[:movie]
  @result = HTTParty.get("https://www.omdbapi.com?s=#{@movie}")

  if @result["Search"].length == 1
      redirect "http://www.imdb.com/title/#{@result["Search"][0]["imdbID"]}"
  else
    erb :movie
  end

end

get '' do
  redirect_to
end
