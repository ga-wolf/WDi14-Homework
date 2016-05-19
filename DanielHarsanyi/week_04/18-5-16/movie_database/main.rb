require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :home
end

get '/home' do
  erb :home
end

get '/movie' do
  erb :movie
end

get '/movie_search' do
  @user_movie = params[:movie_name]
  @search_result = HTTParty.get( "http://www.omdbapi.com?s=#{@user_movie}" )
  @all_results = @search_result["Search"]
  @poster_of_first_result = @search_result["Search"][0]["Poster"]
  erb :result
end
