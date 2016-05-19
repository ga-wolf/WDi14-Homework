require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'

get '/' do
  erb :home
end

get '/prey' do
  @search = params["search"]
  @results = HTTParty.get "http://www.omdbapi.com?t=#{@search}"
  @movie_name = @results["Title"]
  @poster_url = @results["Poster"]
  erb :result
end
