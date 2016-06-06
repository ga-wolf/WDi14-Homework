require 'pry'
require 'sinatra'

get '/' do
    "Hello world"
end

get '/hello' do
    "sup"
    erb(:home)
end

get '/hello/frank' do
    "sup frank"
end

get '/hello/heath' do
    "sup heath"
end

get '/hello/temple' do
    "sup sherl"
end

get '/user/:name' do
    erb(:user_profile)
end

get '/color/:color' do
    erb(:show_color)
end

get '/delete/:name' do
    html = ""
    html << ""
end

get '/calc' do

    # case params[:op]
    #
    # n1 = params[:n1].to_i();
    # n2 = params[:n2].to_i();
    #
    # when 'add' then @result =  +    ;
    # when 'minud' then

    @result
    erb(:calc)
end


get '/calculate' do
    n1 = params[:n1].to_i();
    n2 = params[:n2].to_i();
    @result = n1 + n2;
    @result
    erb(:calculate)
end
