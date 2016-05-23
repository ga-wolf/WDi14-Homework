require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'


get '/' do

  erb :home

end

get '/mountains' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true
    @all_mountains = db.execute "SELECT * FROM mountains;"
    erb :mountains_index
end

get '/mountains/new' do
  erb :mountains_new
end
# binding.pry
post '/mountains' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true
  db.execute"INSERT INTO mountains (name, image, description) VALUES ('#{params[:name]}', '#{params[:image]}', '#{params[:description]}');"
redirect '/mountains'
end


get '/mountains/:id/delete' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true
  db.execute "DELETE FROM mountains WHERE id == #{params[:id]};"

  redirect "/mountains"
end

get '/mountains/:id/edit' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true
  @mountain = db.execute("SELECT * FROM mountains WHERE id == #{params[:id]};")[0]

  # @mountain_id = #{params[:id]}
  erb :mountains_edit
end

post '/mountains/:id' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true
  db.execute "UPDATE mountains SET name='#{params[:name]}', image ='#{params[:image]}', description ='#{params[:description]}' WHERE id == #{params[:id]};"

redirect "/mountains/#{params[:id]}"
end

get '/mountains/:id' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true
  @mountain = db.execute("SELECT * FROM mountains WHERE id == #{params[:id]};")[0]
# still not clear why select will come back as array

  erb :mountains_show
end
