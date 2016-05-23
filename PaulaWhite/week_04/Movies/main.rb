require 'pry'
require 'httparty'
require 'sinatra'
require 'sinatra/reloader'

# Make a literal route, that matches any GET request to the empty path i.e localhost:4567
get '/' do
  # "OMBD"
  #  "This is our home page"
  # Load the home.erb into our layout.erb file (in place of the yield)
   erb :home
end

get '/movie' do
  # "This is my movie page"
  #  "This is our home page"
  # Load the home.erb into our layout.erb file (in place of the yield)
  erb :movie
end

get '/search' do
  # "This is my movie page"
  #  "This is our home page"
  # Load the home.erb into our layout.erb file (in place of the yield)
  movie_title = params[:movie_title]

   @result = HTTParty.get "http://omdbapi.com?t=#{movie_title}"
  #
  # ?@result =  HTTParty.get "http://omdbapi.com?s=#{movie_title}"

  # @movie = @result["Search"]


  erb :search
end
