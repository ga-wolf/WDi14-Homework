require "pry"
require "sinatra"
require "sinatra/reloader"


get '/' do
  "Hello Fabio!"
  erb :home
end

get '/hello' do
  "Hi there"
  erb :home
end

get '/hello/frank' do
  "Hello Frank"
end

get '/hello/temple' do
  "Hello Temple"
end

#Dynamic Routing
get "/hello/:name" do
  # Ruby creates a params hash that contains any details that we car about
  name_from_url = params[:name]

  #Puts, prints, p will all end up in the server log
  puts "There was a name in the url"
  puts "It was #{name_from_url}"


  # Because this is the last thing, it will be sent to the browser
  "Hello #{name_from_url.capitalize}"
end

get '/:color' do
  # puts params
  # "The color path was #{params[:color].upcase}"
  erb(:show_color)
end

get '/users/:username' do
  # "This would be the profile of #{params[:username].capitalize}"
  erb(:user_profile)
end

get '/users/:username/delete' do

  "This should delete the user #{params[:username]}"

  # html = ""
  # html << "<h1>Hello</h1>"
  # html << "<p>We are deleting you</p>"
  # html << "Haha"
  # html
end
puts ""
