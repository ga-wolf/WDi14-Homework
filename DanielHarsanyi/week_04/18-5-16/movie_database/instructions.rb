require 'httparty'
HTTParty.get "http://www.omdbapi?s=Satantango"

response = HTTParty.get (http://www.omdbapi?s=Satantango)

# outputs data

response["Search"]

# gets serch data

response["Search"][0]

# gets first result

response["Search"][0]["Poster"]
# gets the first poster of the first result

# save this value as an instance variable eg @poster
# in the erb page reference that  <img src="<%= @poster %>">

result = HTTParty.get (http://www.omdbapi?s=Alien)

# gets heaps of result

result["Search"][0]

result["Search"][0]["Poster"]


HTTParty.get "http://www.omdbapi?t=Satantango" #search with a t searches for an exact match. better strucutre. more info
result["Title"]
result["Plot"]

# ?t stands for Title - list of one thing

# ?s stands for search - list of all the things

desired_movie = "Satantango"

result = HTTParty.get "http://www.omdbapi?t=#{desired_movie}" #save and evaluate

result["Poster"]


############################

require 'httparty' #important!

result = HTTParty.get "http://www.omdbapi?t=Satantango" #this will make a get request and save the result in result

#can then use that info

result["title"]

#get it to work for one movie first and then start to use forms/user input. Figure out how to customise

#################

home page home.erb


input so someone can type into in
        name of a movie


form will need an action to something in your main.rb, method get
input will need a name attribute (to save parms hash)


in main.rb
get 'movie' do
  make a request HTTPparty.get
  save some instance variables eg @result
  show it in a view <%= %>
end
