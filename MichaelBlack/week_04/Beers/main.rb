require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get "/" do
  # "Hellow Orld"
  erb :home
end

get "/beers" do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  @all_beers = db.execute "SELECT * FROM beers"

  erb :beers_index
end

get "/beers/:id/edit" do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  @beer = db.execute( "SELECT * FROM beers WHERE id == #{params[:id]};" ) [0]
  erb :beer_edit
end

post "/beers/:id" do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  db.execute "UPDATE beers SET brand = '#{params[:brand]}', image = '#{params[:image]}', type = '#{params[:type]}', rating = #{params[:rating]} WHERE id == #{params[:id]};"

  redirect "/beers/#{params[:id]}"
end

get "/beers/:id" do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  @beer = db.execute( "SELECT * FROM beers WHERE id == #{params[:id]};" ) [0]

  # binding.pry

  erb :beer_show
end
