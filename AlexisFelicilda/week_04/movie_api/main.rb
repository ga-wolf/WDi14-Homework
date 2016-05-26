require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do

  erb :home
end



get '/movies' do

  @movie = params[:]
  @result = HTTParty.get("http://www.omdbapi.com?t=#{@movie}")


erb :result
end
