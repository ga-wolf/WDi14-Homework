require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'



get '/' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  @all_buildings = db.execute "SELECT * FROM buildings;"


  erb :home
end


get '/buildings' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  @all_buildings = db.execute "SELECT * FROM buildings;"

  erb :buildings_index
end

get '/buildings/new' do

  erb :buildings_new
end


post '/buildings' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  building = db.execute "INSERT INTO buildings (name, image, address, description) VALUES ('#{params[:name]}','#{params[:image]}','#{params[:address]}','#{params[:description]}');"

  redirect "/buildings"
end



get '/buildings/:id/delete' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  db.execute "DELETE FROM buildings WHERE id == #{params[:id]};"

  redirect "/buildings"
end



get '/buildings/:id/edit' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  @building = db.execute( "SELECT * FROM buildings WHERE id == #{params[:id]};" )[0]

  erb :buildings_edit
end


post '/buildings/:id' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  db.execute "UPDATE buildings SET name = '#{params[:name]}', image = '#{params[:image]}', address = '#{params[:address]}', description = '#{params[:description]}' WHERE id ==#{params[:id]};"

  redirect "/buildings/#{params[:id]}"
end


get '/buildings/:id' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  @building = db.execute( "SELECT * FROM buildings WHERE id == #{params[:id]};")[0]

  erb :buildings_show
end
