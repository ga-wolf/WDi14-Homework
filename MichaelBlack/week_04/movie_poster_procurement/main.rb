require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'

get "/" do
  erb :home
end

get "/output" do
  @input = params["input"]
  @result = HTTParty.get "http://www.omdbapi.com?s=#{@input}"
  # binding.pry
  if @result["Search"].length == 1
    @poster_url = @result["Search"][0]["Poster"]
    erb :output
  else
    erb :list
  end
end

get "/soutput" do
  @input = params["input"]
  @result = HTTParty.get "http://omdbapi.com?s=#{@input}"
  @poster_url = @result["Poster"]
  # binding.pry
  erb :output
end
