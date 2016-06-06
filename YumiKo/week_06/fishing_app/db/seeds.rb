# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Region.destroy_all
r1 = Region.create :name => 'Central Coast', :address => 'Central Coast, NSW', :description => 'All the top angling species can be taken from the lakes and along the surfing beaches.'
r2 = Region.create :name => 'Lake Burrinjuck', :address => 'New South Wales 2582', :description => 'Between the Barren Jack and Black Andrew Mountains lies a significant lake called Burrinjuck. The lake supplies regulated water flows to the entire Murrumbidgee Valley. The catchment area of the dam can hold double the amount of water in Sydney Harbour.'
r3 = Region.create :name => 'Port Stephens', :address => 'New South Wales 2324', :description => 'In recent years, both these popular holiday spots have received a steady stream of holidaymakers as well as a growing number of permanent residents. In spite of being well fished, both waterways are well stocked with a great variety of good-sized fish.'


Spot.destroy_all
s1 = Spot.create :name => 'The Skillion', :lat => '-33.447895', :lng => '151.452265', :description => 'The Skilion is a great spot for lures and live bait. Kingfish, tuna and snapper are taken here, as well as tailor during the season', :region_id => r1.id
s2 = Spot.create :name => 'South Avoca beach', :lat => '-33.469136', :lng => '151.435993', :description => 'South Avoca beach - famous for big catches of bonito, tailor, kingfish and tuna. Live baiting for jewfish is also popular.', :region_id => r1.id
s3 = Spot.create :name => 'Brisbane Water', :lat => '-33.462119', :lng => '151.333607', :description => 'Brisbane Water - You will need a boat to catch bream, whiting, flathead, flounder, garfish and tar whine.', :region_id => r1.id
s4 = Spot.create :name => "Carol's Creek", :lat => '-34.972618', :lng => '148.631954', :description => "Carol's Creek - There is good bait fishing and lurecasting towards the top end of the inlet.", :region_id => r2.id
s5 = Spot.create :name => 'The Bluff', :lat => '-34.993986', :lng => '148.623674', :description => "The Bluff - Trophy-sized Murray cod is present specially during late summer and the end of autumn.", :region_id => r2.id
s6 = Spot.create :name => 'Dales Point', :lat => '-34.994834', :lng => '148.647478', :description => "Dales Point - Cod, golden perch and redfin can be trolled up by getting close to the bank.", :region_id => r2.id
s7 = Spot.create :name => "Billsen's Bay", :lat => '-34.961932', :lng => '148.685565', :description => "Billsen's Bay - High quality golden perch are being caught here", :region_id => r2.id
s8 = Spot.create :name => "Tea Gardens", :lat => '-32.675597', :lng => '152.157182', :description => "Tea Gardens is famous for the size and quantity of luderick taken in the channels. Black bream are also prolific in this area.", :region_id => r3.id
s9 = Spot.create :name => "Lemon Tree Passage", :lat => '-32.727794', :lng => '152.041032', :description => "Lemon Tree Passage - Sheltered waters are ideal for boat anglers seeking flathead, bream, whiting and luderick", :region_id => r3.id
s10 = Spot.create :name => "The Karuah River", :lat => '-32.635473', :lng => '151.963126', :description => "The Karuah River has estuary, bream, whiting, luderick, flathead, sole, flounder and blue swimmer crabs", :region_id => r3.id



User.destroy_all
u1 = User.create :name => 'Josh', :email => 'josh@ga.co', :password => 'chicken', :password_confirmation => 'chicken', :admin => true
u2 = User.create :name => 'Daisy', :email => 'daisy@ga.co', :password => 'chicken', :password_confirmation => 'chicken'
u3 = User.create :name => 'Mercury', :email => 'mercury@ga.co', :password => 'chicken', :password_confirmation => 'chicken'
u4 = User.create :name => 'Terry', :email => 'terry@ga.co', :password => 'chicken', :password_confirmation => 'chicken'

Review.destroy_all
r1 = Review.create :rating => '5', :content => 'This is it', :user_id => u1.id, :region_id => r1.id, :link => 'http://images.all-free-download.com/images/graphiclarge/seahorse_fish_water_221733.jpg'
r2 = Review.create :rating => '3', :content => 'So so', :user_id => u2.id, :region_id => r1.id, :link => 'http://images.all-free-download.com/images/graphiclarge/lion_fish_water_219341.jpg'
r3 = Review.create :rating => '2', :content => 'Not that I wanted', :user_id => u2.id, :region_id => r1.id, :link => 'http://images.all-free-download.com/images/graphiclarge/fish_water_fish_swarm_236422.jpg'
r4 = Review.create :rating => '4', :content => 'It was good', :user_id => u3.id, :region_id => r1.id, :link => 'http://images.all-free-download.com/images/graphiclarge/fish_swarm_fish_aquarium_225341.jpg'
