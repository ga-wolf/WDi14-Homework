require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

# link to home page
get '/' do
  erb :home
end

# Link to form to create a new bread
get '/breads/new' do
  erb :breads_new
end



get '/breads' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  @all_breads = db.execute "SELECT * FROM breads;"
  erb :breads_index
end


post '/breads' do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  bread = db.execute "INSERT INTO breads (type, origin, difficulty) VALUES ('#{params[:type]}', '#{params[:origin]}', '#{params[:difficulty]}');"

  redirect "/breads"
end
