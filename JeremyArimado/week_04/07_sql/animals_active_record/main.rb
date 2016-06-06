require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    erb :home
end

get '/animals' do

    db = SQLite3::Database.new "database.db"
    db.results_as_hash = true

    @all_animals = db.execute "SELECT * FROM animals"

    # p all_animals

    # binding.pry

    erb :animals_index
end

get '/animal/new' do

    erb :animals_new
end

post '/animals' do

    species = params["species"];
    image = params["image"];
    description = params["description"];

    db = SQLite3::Database.new "database.db"
    db.results_as_hash = true

    sql = "INSERT INTO animals (species, image, description)"
    sql << " VALUES ('#{species}', '#{image}', '#{description}');"
    puts sql
    # binding.pry
    db.execute sql

    redirect '/animals'

end

get '/animal/:id/delete' do
    db = SQLite3::Database.new "database.db"
    db.results_as_hash = true

    sql = "DELETE FROM animals "
    sql << "WHERE id == #{params["id"]};"

    db.execute sql

    redirect '/animals'
end

get '/animal/:id/edit' do
    db = SQLite3::Database.new "database.db"
    db.results_as_hash = true

    @animal = db.execute( "SELECT * FROM animals WHERE id == #{params[:id]};" )[0]

    # db.execute sql

    erb :animals_edit
end

post '/animal/:id' do
    db = SQLite3::Database.new "database.db"
    db.results_as_hash = true

    @animal = db.execute( "SELECT * FROM animals WHERE id == #{params[:id]};" )[0]

    id = params[:id];
    species = params[:species];
    image = params[:image];
    desc = params[:description];

    sql = "UPDATE animals SET "
    sql << "species = '#{species}', image = '#{image}', description = '#{desc}' "
    sql << "WHERE id == #{id}; "

    db.execute sql

    redirect "/animal/#{id}"
end

get '/animal/:id' do
    db = SQLite3::Database.new "database.db"
    db.results_as_hash = true

    @animal = db.execute( "SELECT * FROM animals WHERE id == #{params[:id]};" )[0]

    erb :animal
end

get '/crazy-insert' do
    db = SQLite3::Database.new "database.db"
    db.results_as_hash = true

    i = 0
    while i < 20000
        db.execute "INSERT INTO animals (species, image, description) VALUES ('PANDA', 'http://i.ytimg.com/vi/lsJLLEwUYZM/sddefault.jpg', 'PANDA');"
        i += 1;
    end
    erb :animals_index
end
