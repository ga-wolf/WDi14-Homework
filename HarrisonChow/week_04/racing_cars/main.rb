
require 'pry'
require 'sinatra'
set :port, 7070
require 'sinatra/reloader'
require 'sqlite3'


get '/' do
  erb :home
end

get '/cars' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true
  @cars = db.execute("SELECT * FROM racingcars")
  erb :cars
end

get '/cars/:id' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true
  @car = db.execute("SELECT * FROM racingcars WHERE id =='#{params[:id]}'")

  erb :car_detail
end


get '/cars_new' do
  erb :cars_new
end


get '/:id/car_update' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true
  @car = db.execute("SELECT * FROM racingcars WHERE id =='#{params[:id]}'")
  erb :car_update
end
#
post '/:id/car_update' do

  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true
  db.execute "UPDATE racingcars SET model='#{params[:model]}',make='#{params[:make]}',
  year='#{params[:year]}',image='#{params[:image]}',price='#{params[:price]}',
  description='#{params[:description]}' WHERE id == #{params[:id]};"
  redirect '/cars'
end

get '/:id/delete' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true
  db.execute "DELETE FROM racingcars WHERE id ==#{params[:id]};"
  redirect '/cars'
end


post '/cars' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true
  db.execute "INSERT INTO racingcars (model,make,year,image,price,description) VALUES (
  '#{params[:model]}','#{params[:make]}','#{params[:year]}','#{params[:image]}','#{params[:price]}',
  '#{params[:description]}');"
  redirect '/cars'
end




puts ""
