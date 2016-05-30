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
s1 = Spot.create :name => 'The Skillion', :address => 'Terrigal NSW 2260', :description => 'The Skilion is a great spot for lures and live bait. Kingfish, tuna and snapper are taken here, as well as tailor during the season', :region_id => r1.id
