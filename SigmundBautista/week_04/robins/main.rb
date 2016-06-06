require "pry"
require "sinatra"
require "sinatra/reloader"
require "sqlite3"


get "/" do
  erb :home
end

get "/robins" do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  @all_robins = db.execute("SELECT * FROM robins;")
  erb :robins_index
end

get "/robins/new" do
  erb :robins_new
end

post "/robins" do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  robins = db.execute("INSERT INTO robins (full_name, alias, bio, cause_of_death, image)
  VALUES ('#{params[:full_name]}', '#{params[:alias]}', '#{params[:bio]}', '#{params[:cause_of_death]}', '#{params[:image]}');")

  redirect "/robins"
end


get "/robins/:id/delete"  do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  db.execute "DELETE FROM robins WHERE id ==#{params[:id]};"
  redirect "/robins"
end

get "/robins/:id/edit" do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  @robins = db.execute("SELECT * FROM robins WHERE id == #{params[:id]};")[0]

  erb :robins_edit
end

post "/robins/:id" do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  db.execute "UPDATE robins SET cause_of_death = '#{params[:cause_of_death]}', alias = '#{params[:alias]}', full_name ='#{params[:full_name]}', image = '#{params[:image]}', bio = '#{params[:bio]}' WHERE id == #{params[:id]};"
  redirect "/robins/#{params[:id]}"
end

get "/robins/:id" do
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true

  @robins = db.execute("SELECT * FROM robins WHERE id == #{params[:id]};")[0]
  erb :robins_show
end
