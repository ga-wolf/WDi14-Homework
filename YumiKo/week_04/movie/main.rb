require 'pry'
require 'httparty'
require 'sinatra'
require 'sinatra/reloader'


get '/' do
  "Do something"

end

get '/home' do
  # "This is your home"

  # params[:keyword]
  erb :home

end

get '/about' do
  # "This is the place you need to put about!"
  erb :about
end

get '/search' do
  # "Enter your keyword"

  puts "\n\n"
  puts params
  puts "\n\n"
  # We expect parameters to be received from the url
  # localhost:4567/calculate?first_number=10&second_number=20
  @search_keyword = params[:keyword].chomp
  @result = HTTParty.get("http://omdbapi.com/?s=#{@search_keyword}")
  @first_result=@result["Search"][0]
  # binding.pry

  @poster_of_first_result=@result["Search"][0]["Poster"]
  @title_of_first_result=@first_result["Title"]

  #
  # @search_title_result = HTTParty.get("http://omdbapi.com/?t=#{@search_keyword}")
  #
  # @first_title_result=@search_title_result["Search"][0]



 erb :result
  # We create instance variables so we can access them in the view
  # @result = @first_number + @second_number
end

get '/result' do
  "Here is your result"
end
