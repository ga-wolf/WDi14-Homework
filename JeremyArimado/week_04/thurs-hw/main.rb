require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require "sqlite3"
require 'active_record'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.db'
);

ActiveRecord::Base.logger = Logger.new(STDERR);

class Chan < ActiveRecord::Base
end

def commandDb (sqlCommand)
    db = SQLite3::Database.new "database.db";
    db.results_as_hash = true;
    return db.execute(sqlCommand);
end

get '/' do
    @chans = Chan.all()
    erb :home
end

get '/new' do
    erb :new
end

post '/new' do
    title = params[:title];
    image = params[:image];
    content = params[:content];
    Chan.create({
        :title => title,
        :image => image,
        :content => content
    });

    redirect "/"
end

get '/chan/:id' do
    current_id = params[:id];
    current_chan = Chan.find(current_id);
    @chan = current_chan;
    erb :chan;
end


get '/chan/:id/edit' do
    current_id = params[:id];
    @chan = Chan.find(current_id);
    erb :edit;
end

post '/chan/:id' do
    current_id = params[:id];
    title = params[:title];
    image = params[:image];
    content = params[:content]
    new_chan = Chan.find(current_id);
    new_chan.update(
        :title => title,
        :image => image,
        :content => content
    );
    new_chan.save;
    redirect "/chan/#{current_id}"
end

get '/chan/:id/delete' do
    current_id = params[:id];
    kill_chan = Chan.find(current_id);
    kill_chan.destroy();
    redirect '/';
end
