#Require all of our gems, making sure to get the sqlite3 gem (which allow Ruby to talk to the sqlite3 database on your computer)
require "pry"
require "sinatra"
require "sinatra/reloader"
require "sqlite3"
require "active_record"

# Connect to the database.db using sqlite3.

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.db'
);

ActiveRecord::Base.logger = Logger.new(STDERR)

class Animal < ActiveRecord::Base
end

class Habitat < ActiveRecord::Base
end

get '/' do
  erb :home
end

get '/habitats' do
  @all_habitats = Habitat.all
  erb :habitats_index
end

get '/' do
  redirect "/animals"
end
# We respond to a GET request to an empty path
get '/animals' do

  @all_animals = Animal.all

  erb :animals_index
end

get '/habitats/new' do
  erb :habitats_new
end

get '/animals/new' do
  erb :animals_new
end

post '/habitats' do
  habitat = Habitat.new
  habitat.landscape = params["landscape"]
  habitat.climate = params["climate"]
  habitat.save

  redirect '/habitats'
end

post '/animals' do

  animal = Animal.new
  animal.species = params["species"]
  animal.image = params["image"]
  animal.description = params["description"]
  animal.save

  redirect "/animals"

end

get '/habitats/:id/delete' do

  habitat = Habitat.find(params[:id])
  habitat.destroy
  redirect "/habitats"
end

get '/animals/:id/delete' do

  animal = Animal.find (params[:id])
  animal.destroy

  redirect "/animals"
end

get '/habitats/:id/:edit' do

  @habitat = Habitat.find( params[:id] )

  erb :habitats_edit

end

get '/animals/:id/:edit' do

  @animal = Animal.find( params[:id] )

  erb :animals_edit

end

post '/habitats/:id' do
  habitat = Habitat.find params[:id]
  habitat.landscape = params["landscape"]
  habitat.climate = params["climate"]
  habitat.save

  redirect "/habitats/#{params[:id]}"
end

post "/animals/:id" do

  animal = Animal.find( params[:id] )
  animal.species = params["species"]
  animal.image = params["image"]
  animal.description = params["description"]
  animal.save

  redirect "/animals/#{params[:id]}"

end

get '/habitats/:id' do

  @habitat = Habitat.find( params[:id] )
  erb :habitats_show

end

get '/animals/:id' do
  # db = SQLite3::Database.new "database.db"
  # db.results_as_hash = true
  #
  # @animal = db.execute("SELECT * FROM  animals WHERE id == #{params[:id]};")[0]

  #@ name of variable (@animal) to make it available in the views
  @animal = Animal.find( params[:id] )
  #  We should be able to access @animal in here
  erb :animals_show

end
