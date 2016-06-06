#Require all of our gems, making sure to get the sqlite3 gem (which allow Ruby to talk to the sqlite3 database on your computer)
require "pry"
require "sinatra"
require "sinatra/reloader"
require "sqlite3"

get '/' do
  erb :home
end
# We respond to a GET request to an empty path
get '/animals' do

  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  @all_animals = db.execute "SELECT * FROM  animals;"

  erb :animals_index
end

get '/animals/new' do
  erb :animals_new
end

post '/animals' do

  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  animal = db.execute "INSERT INTO animals (species,image,description) VALUES('#{params[:species]}','#{params[:image]}','#{params[:description]}');"

  redirect "/animals"

end

get '/animals/:id/delete' do
  # params[:id]
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  db.execute "DELETE FROM animals WHERE id == #{params[:id]};"

  redirect "/animals"
end

get '/animals/:id/:edit' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  @animal = db.execute("SELECT * FROM animals WHERE id == #{params[:id]};")[0]

  erb :animals_edit

end

post "/animals/:id" do

  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true


  db.execute "UPDATE animals SET species='#{params[:species]}', image='#{params[:image]}', description='#{params[:description]}' WHERE id == #{params[:id]};"

  redirect "/animals/#{params[:id]}"

end


get '/animals/:id' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  @animal = db.execute("SELECT * FROM  animals WHERE id == #{params[:id]};")[0]

  erb :animals_show

end
