require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

get '/cards' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  @all_cards = db.execute "SELECT * FROM cards;"
  erb :cards_index
end

get '/cards/new' do
  erb :cards_new
end

get '/cards/:id/edit' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  @card = (db.execute "SELECT * FROM cards WHERE id == #{params[:id]};")[0]

  erb :cards_edit
end

get '/card_search' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  @card_search = params["search"]
  @matches = db.execute "SELECT * FROM cards WHERE name == '#{@card_search}'";

  erb :card_search
end

post '/cards/:id' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  db.execute "UPDATE cards SET name='#{params[:name]}', cost='#{params[:cost]}', image='#{params[:image]}', description='#{params[:description]}' WHERE id == #{params[:id]};"

  redirect "/cards/#{params[:id]}"
end

post '/cards' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  card = db.execute "INSERT INTO cards (name, cost, image, description) VALUES ('#{params[:name]}', '#{params[:cost]}', '#{params[:image]}', '#{params[:description]}');"

  redirect '/cards'
end

get '/cards/:id' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  @card = (db.execute "SELECT * FROM cards WHERE id == #{params[:id]};")[0]

  erb :cards_show
end

get '/cards/:id/delete' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  db.execute "DELETE FROM cards WHERE id == #{params[:id]};"

  redirect "/cards"
end
