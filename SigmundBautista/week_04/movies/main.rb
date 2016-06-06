require "pry"
require "sinatra"
require "sinatra/reloader"
require "HTTParty"

get "/" do
  erb :home
end

get "/search" do

  @search = params["movie_search"]
  @result = HTTParty.get "http://www.omdbapi.com?t=#{@search}"
  @poster = @result["Poster"]
  @title = @result["Title"]

  @result2 = HTTParty.get "http://www.omdbapi.com?s=#{@search}"
  @results_list = @result2["Search"][1]
  @poster2 = @results_list["Poster"]

erb :results
end
5
