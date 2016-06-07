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

class Habitat < ActiveRecord::Base
    has_many(:chans);
end

class Chan < ActiveRecord::Base
    belongs_to(:habitat);
end

def commandDb (sqlCommand)
    db = SQLite3::Database.new "database.db";
    db.results_as_hash = true;
    return db.execute(sqlCommand);
end

get '/' do
    @chans = Chan.all();
    erb :home
end

get '/habitats' do
    @habitats = Habitat.all();
    erb :habitats_index
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

get '/habitats/new' do
    erb :habitats_new
end

post '/habitats/new' do
    landscape = params[:landscape];
    climate = params[:climate];

    Habitat.create({
        :landscape => landscape,
        :climate => climate
    });

    redirect "/"
end



get '/chan/:id' do
    current_id = params[:id];
    current_chan = Chan.find(current_id);
    @chan = current_chan;
    erb :chan
end

get '/habitats/:id' do
    current_id = params[:id];
    current_chan = Habitat.find(current_id);
    @habitat = current_chan;
    erb :habitats_show;
end

post '/habitats/:id' do
    current_id = params[:id];
    landscape = params[:landscape];
    climate = params[:climate];
    new_habitats = Habitat.find(current_id);
    new_habitats.update(
        :landscape => landscape,
        :climate => climate
    );
    new_habitats.save;
    redirect "/habitats/#{current_id}"
end

get '/habitats/:id/edit' do
    current_id = params[:id];
    @habitat = Habitat.find(current_id);
    erb :habitats_edit;
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
    content = params[:content];
    habitat_id = params[:habitat_id];

    new_chan = Chan.find(current_id);
    new_chan.update(
        :title => title,
        :image => image,
        :content => content,
        :habitat_id => habitat_id
    );

    redirect "/chan/#{current_id}"
end

get '/chan/:id/delete' do
    current_id = params[:id];
    kill_chan = Chan.find(current_id);
    kill_chan.destroy();
    redirect '/';
end

get '/habitats/:id/delete' do
    current_id = params[:id];
    kill_habitat = Habitat.find(current_id);
    kill_habitat.destroy();
    redirect '/habitats';
end
