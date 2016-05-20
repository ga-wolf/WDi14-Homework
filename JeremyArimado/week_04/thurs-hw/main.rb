require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require "sqlite3"
@dbase = "database.db"

def commandDb (sqlCommand)
    db = SQLite3::Database.new "database.db";
    db.results_as_hash = true;
    return db.execute(sqlCommand);
end

get '/' do
    @chans = commandDb("SELECT * FROM chans;");
    erb :home
end

get '/new' do
    erb :new
end

post '/new' do
    title = params[:title];
    image = params[:image];
    content = params[:content];
    sql = "INSERT INTO chans (title, image, content)";
    sql << " VALUES ('#{title}', '#{image}', '#{content}');";
    commandDb(sql);
    redirect "/"
end

get '/chan/:id' do
    current_id = params[:id];
    sql = "SELECT * FROM chans WHERE id == #{current_id};";
    @chan = commandDb(sql)[0];
    erb :chan;
end


get '/chan/:id/edit' do
    current_id = params[:id];
    sql = "SELECT * FROM chans WHERE id == #{current_id};";
    @chan = commandDb(sql)[0];
    erb :edit;
end

post '/chan/:id' do
    current_id = params[:id];
    title = params[:title];
    image = params[:image];
    content = params[:content]
    sql = "UPDATE chans SET title = '#{title}', image = '#{image}', content = '#{content}' WHERE id = #{current_id};";
    commandDb(sql);
    redirect "/chan/#{current_id}"
end

get '/chan/:id/delete' do
    current_id = params[:id];
    sql = "DELETE FROM chans WHERE id == #{current_id};";
    @chan = commandDb(sql);
    redirect '/';
end
