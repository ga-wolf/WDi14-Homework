require 'sinatra'
require 'httparty'

get '/' do
    erb(:home);
end

get '/results' do
    movie = params[:movie];
    @result = HTTParty.get( "http://www.omdbapi.com?s=#{movie}" )["Search"];
    erb(:results);
end

get '/movie/:name' do
    movie = params[:name];
    @result = HTTParty.get( "http://www.omdbapi.com?t=#{movie}" );
    erb(:movie);
end
