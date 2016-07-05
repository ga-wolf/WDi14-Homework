# namespace :cat do
#   desc "My cat loves to"
#
#   task :groom do
#     puts "It comes to me whenever I go to bed"
#   end
#
#   task :morning do
#     puts "Wait for the feeder."
#   end
#
#   task :sleep do
#     puts "It goes to my bed to sleep"
#   end
#
# end
#
# namespace :cat do
#   task :groom do
#     puts "It jumps on the scratcher"
#   end
#
#   task :morning_ritual => ["cat:groom", "cat:morning"]
# end
#
# namespace :kane do
#   task :sleep do
#     # Call the cat :sleep
#     Rake::Task["cat:sleep"].invoke
#   end
# end
#
# task :default => "cat:morning_ritual"

namespace :pokemon do
  require 'open-uri'
  desc "Scrapes pokemon from the internet."
  task create: :environment do
    Pokemon.destroy_all
    base_url = "http://pokemon.wikia.com/"
    index_page = "wiki/List_of_Pokemon"

    # Pokedex is the response text of the index page
    pokedex = Nokogiri::HTML(open(base_url+index_page))
    # Next I specify the tables elements
    tables = pokedex.css(".wikitable")
    # I target only the first table because I only want the first generation of pokemon
    generation_1 = tables[0]
    # Once I've selected my specific table, I get a list of table rows to iterate through.
    gen_list = generation_1.css("tr")

    #Each with index gives me access to the index variable, a counter for each run ofthe loop,
    # I use this to hard code the IDs of my models (instead of auto-increment).
    gen_list.each_with_index do |p, index|

      # Firstly I loop through each link in the table
      unless p.css("a")[0].nil? # If this element has data
        poke_url = p.css("a")[0].attributes["href"].value # Extract the url (ie: /wiki/bulbasaur)
        # I use the url returned by the table and then access /that/ page and scrape the data page by page
        single_pokemon = Nokogiri::HTML( open( base_url + poke_url ))

        name = single_pokemon.css("h1").text
        image_list = single_pokemon.css(".floatnone .image-thumbnail img")
        image_list.each do |p|
          # This site is populated with several images and ads, meaning I had to be /very/ specific
          # with my search criteria, breaking as soon as I hit a valid link.
          # Image extraction
          if p.attributes["width"].value == "200" && p.attributes["width"] != nil
            @image = p["src"]
            break if @image =~ /http*/
          end
        end
        # Icon extraction
        image_list.each do |p|
          if p.attributes["height"].value == "32" && p.attributes["width"] != nil
            @icon = p["data-src"] || p.attributes["src"].value
            break
          end
        end

        # Puts are stricty so I can see my data is valid, the last thing I do is generate
        # a model and insert it in to the database with all the values I scraped.
        puts index
        puts name
        puts @icon
        puts @image
        puts ""
        @pokemon = Pokemon.create( id: index, name: name, icon: @icon, image:@image )

      end
    end
  end
end # end task
