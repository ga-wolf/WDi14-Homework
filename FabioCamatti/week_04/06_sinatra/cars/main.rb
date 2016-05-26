# Require all the gems (plugins, libraries)
  #Pry for debugging
  #Sinatra to use this file as a web app
  #Sinatra/reloader to stop as having to refresh the server


require "pry"
require "sinatra"
require "sinatra/reloader"


# Make a literal route, that matches any GET request to the empty path i.e. localhost:4567

get '/' do
  # "This is our home page"
  # Load the home.erb into our layout.erb file (in place of the yield)
  erb :home
end

# Make a literal route, that matches any GET request to localhost:4567/about

get '/about' do
  erb :about
end

# Make a literal route, that matches any GET request to localhost:4567/contact

get '/contact' do
  erb :contact
end

# Make a dynamic route, that matches anything that follows the basic structure of /calc/:x/:y
  # Save x in params
  # Save y in params

get '/calc/:x/:y' do
 #No at, no play, no fun display
   #Instance variables are allowed to be acessed in the views

  @x = params[:x].to_i
  @y = params[:y].to_i

# Make layout.erb load result.erb in place of yield
# Make sure that result.erb and layout.erb can access our instance variables (i.e. @result)
  erb :result
end

# Literal route that matches localhost:4567/calc
get '/calc' do
  # We load the calc.erb file into layout.erb
  # The sole purpose of this is to show a form
  erb :calc
end

# Literal route to /calculate
get '/calculate' do
  puts "\n\n" # These are just new line characters
  puts params
  puts "\n\n" # These are just new line characters

# We expect parameters to be received from the url localhost:4567/calculate?first=10&second=20
  @x = params[:first].to_f
  @y = params[:second].to_f
# Finally, we should show the result.erb page where the yield would be in the layout.erb file
  erb :result
end
