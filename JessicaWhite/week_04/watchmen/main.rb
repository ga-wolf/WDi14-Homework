require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

get '/watchmen' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  @all_watchmen = db.execute "SELECT * FROM watchmen;"

  erb :watchmen_index
end

get '/watchmen/new' do
  erb :watchmen_new
end

post '/watchmen' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  watchmen = db.execute "INSERT INTO watchmen (name, aka, image, description) VALUES ('#{params[:name]}', '#{params[:aka]}', '#{params[:image]}', '#{params[:description]}');"

  redirect "/watchmen"
end

get '/watchmen/:id/delete' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  db.execute "DELETE FROM watchmen WHERE id == #{params[:id]}"

  redirect "/watchmen"
end

get '/watchmen/:id/edit' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  @watchmen = db.execute( "SELECT * FROM watchmen WHERE id == #{params[:id]};" )[0]

  erb :watchmen_edit
end

post '/watchmen/:id' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  db.execute "UPDATE watchmen SET name = '#{params[:name]}', aka = '#{params[:aka]}', image = '#{params[:image]}', description = '#{params[:description]}' WHERE id == #{params[:id]}"

  redirect "/watchmen/#{params[:id]}"
end

get '/watchmen/:id' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  @watchmen = db.execute( "SELECT * FROM watchmen WHERE id == #{params[:id]};" )[0]

  erb :watchmen_show
end
