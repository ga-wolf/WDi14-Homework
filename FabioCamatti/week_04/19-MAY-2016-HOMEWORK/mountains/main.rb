require "pry"
require "sinatra"
require "sinatra/reloader"
require "sqlite3"

get '/' do
  redirect "/mountains"
end

get '/mountains' do

  db = SQLite3::Database.new "dbmountains.db"
  db.results_as_hash = true

  @all_mountains = db.execute "SELECT * FROM  mountains;"
  erb :mountains_index
end

get '/mountains/new' do
  erb :mountains_new
end

post '/mountains' do

  db = SQLite3::Database.new "dbmountains.db"
  db.results_as_hash = true

  mountain = db.execute "INSERT INTO mountains (name, location, elevation, image) VALUES('#{params[:name]}','#{params[:location]}','#{params[:elevation]}', '#{params[:image]}');"

  redirect "/mountains"

end

get '/mountains/:id/delete' do
  # params[:id]
  db = SQLite3::Database.new "dbmountains.db"
  db.results_as_hash = true

  db.execute "DELETE FROM mountains WHERE id == #{params[:id]};"

  redirect "/mountains"
end

get '/mountains/:id/:edit' do
  db = SQLite3::Database.new "dbmountains.db"
  db.results_as_hash = true

  @mountain = db.execute("SELECT * FROM mountains WHERE id == #{params[:id]};")[0]

  erb :mountains_edit

end

post "/mountains/:id" do

  db = SQLite3::Database.new "dbmountains.db"
  db.results_as_hash = true


  db.execute "UPDATE mountains SET name='#{params[:name]}', location='#{params[:location]}', elevation='#{params[:elevation]}' , image='#{params[:image]}' WHERE id == #{params[:id]};"

  redirect "/mountains/#{params[:id]}"

end


get '/mountains/:id' do
  db = SQLite3::Database.new "dbmountains.db"
  db.results_as_hash = true

  @mountain = db.execute("SELECT * FROM  mountains WHERE id == #{params[:id]};")[0]

  erb :mountains_show

end
