require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

get '/reefs' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  @all_reefs = db.execute "SELECT * FROM reefs;"

  erb :reefs_index
end

get '/reefs/new' do
  erb :add_reef
end

post '/reefs' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  reef = db.execute "INSERT INTO reefs (name, image, description) VALUES ('#{params[:name]}', '#{params[:image]}', '#{params[:description]}');"
  redirect "/reefs"
end


get '/reefs/:id/delete' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  db.execute "DELETE FROM reefs WHERE id == #{params[:id]};"

  redirect "/reefs"

end

get '/reefs/:id/edit' do
  # Uses a route to show the form
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true


  @reef = db.execute( "SELECT * FROM reefs WHERE id == #{params[:id]};" )[0]


  erb :reefs_edit
end

post "/reefs/:id" do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  db.execute "UPDATE reefs SET name='#{params[:name]}' ,image= '#{params[:image]}', description= '#{params[:description]}' WHERE id == #{params[:id]};"

redirect "/reefs/#{params[:id]}"
end




get '/reefs/:id' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  @reef = db.execute( "SELECT * FROM reefs WHERE id == #{params[:id]};" )[0]

  erb :reefs_page
end
