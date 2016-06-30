# Movies I
# Specification
#
# Build a search form that lets the user enter a movie name. The Sinatra app will use HTTParty to fetch the data for the chosen movie from OMDB and display it on the page. Display the poster, as a bare minimum.
#
# Bonus I
#
# Modify your existing code to allow searches for multiple matches. For example, a search for "Alien" should return a list of clickable links (each of which would then take you to the full results page for the selected movie):
#
# Alien
# Aliens
# Alien 3
# Alien Resurrection
# My Stepmother Is An Alien
# etc
# The OMDB site documents the parameter you need to use to search for multiple matches.

require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'

get '/' do
  erb :home
end

get '/movie' do
  erb :movie
end

get '/moviesearch' do

  puts "\n\n"
  puts params
  puts "\n\n"

  @desired_movie = params["desired_movie"]
  result = HTTParty.get "http://www.omdbapi.com?t=#{@desired_movie}"
  @poster = result["Poster"]
  @plot = result["Plot"]


  erb :result

end
