require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require "sqlite3"
@dbase = "database.db"

get '/' do
    erb :home
end

get '/new' do
    erb :new
end

post '/new' do

    title = params[:title];
    image = params[:image];
    content = params[:content];

    db = SQLlite3::Database.new "database.db"
    db.results_as_hash = true

    binding.pry

    sql = "INSERT INTO chans (title, image, content)"
    sql << " VALUES ('#{title}', '#{image}', '#{content}');"

    db.execute sql

    redirect "/"
end
