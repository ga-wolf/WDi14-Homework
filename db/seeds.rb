# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Region.destroy_all
r1 = Region.create :name => 'Central Coast', :address => 'central coast', :description => 'All the top angling species can be taken from the lakes and along the surfing beaches.'

Spot.destroy_all
s1 = Spot.create :name => 'The Skillion', :lat => '-33.447895', :lng => '151.452265', :description => 'The Skilion is a great spot for lures and live bait. Kingfish, tuna and snapper are taken here, as well as tailor during the season', :region_id => r1.id
s2 = Spot.create :name => 'South Avoca beach', :lat => '-33.469136', :lng => '151.435993', :description => 'South Avoca beach - famous for big catches of bonito, tailor, kingfish and tuna. Live baiting for jewfish is also popular.', :region_id => r1.id
s3 = Spot.create :name => 'Brisbane Water', :lat => '-33.462119', :lng => '151.333607', :description => 'Brisbane Water - You will need a boat to catch bream, whiting, flathead, flounder, garfish and tar whine.', :region_id => r1.id

User.destroy_all
u1 = User.create :name => 'Josh', :email => 'josh@ga.co', :password => 'chicken', :password_confirmation => 'chicken', :admin => true
u2 = User.create :name => 'Daisy', :email => 'daisy@ga.co', :password => 'chicken', :password_confirmation => 'chicken'

Review.destroy_all
r1 = Review.create :rating => '5', :content => 'This is it', :user_id => u1.id, :region_id => r1.id, :link => 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg'
