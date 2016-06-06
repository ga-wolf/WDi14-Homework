require 'pry'
require 'sqlite3'
require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb :home
end

get '/home' do
  erb :home
end

get '/trainers' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  @all_trainers = db.execute "SELECT * FROM trainers;"
  erb :trainers_index
end

get '/trainers/add' do
  erb :trainers_create
end

get '/trainers/:id/delete' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  db.execute "DELETE FROM trainers WHERE id == #{params[:id]};"

  redirect "/trainers"
end

get '/trainers/:id/edit' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  @trainer = db.execute( "SELECT * FROM trainers WHERE id == #{params[:id]};" )[0]

  erb :trainers_edit
end



get '/trainers/:id' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  @trainer = db.execute("SELECT * FROM trainers WHERE id == #{params[:id]};" )[0]
  erb :trainers_show
end

post '/trainers/:id' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  db.execute "UPDATE trainers SET first_name='#{params[:first_name]}', last_name='#{params[:last_name]}', image = '#{params[:image]}', registration_id = '#{params[:registration_id]}', specialties = '#{params[:specialties]}' WHERE id == #{params[:id]};"

  redirect "/trainers/#{params[:id]}"
end

post '/trainers' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  trainer = db.execute "INSERT INTO trainers (first_name, last_name, registration_id , image, specialties) VALUES ('#{params[:first_name]}', '#{params[:last_name]}', '#{params[:registration_id]}', '#{params[:image]}', '#{params[:specialties]}');"
  redirect "/trainers"
end
