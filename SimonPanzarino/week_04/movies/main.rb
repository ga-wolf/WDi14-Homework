require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :home
end

get '/movie' do
  movie = params[:movie]
  id = params[:id]
  refined = params[:bool]
  response = HTTParty.get( "http://www.omdbapi.com?s=#{movie}" )
  @pick = refined
  if refined == "true"
    response = HTTParty.get( "http://www.omdbapi.com?i=#{id}")
    @result = response
    erb :result
  elsif response["Search"].length == 1
    reponse = HTTParty.get( "http://www.omdbapi.com?t=#{movie}")
    @result = reponse
    erb :result
  else
    reponse = HTTParty.get( "http://www.omdbapi.com?s=#{movie}")
    @result = reponse
    erb :multiple
  end

end
