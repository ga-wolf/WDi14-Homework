# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Artist.destroy_all

Artist.create :name => "Joan Miro", :nationality => "Spanish", :dob => "1893/04/20", :period => "20th century", :image => "http://www.joan-miro.net/images/joan-miro.jpg"

Work.destroy_all

Work.create :title => "The Flight of the Drangofly in Front of the Sun", :year => '1968', :medium => "oil in canvas", :style => "Abstract", :image => "http://www.joan-miro.net/images/paintings/the-flight-of-the-dragonfly-in-front-of-the-sun.jpg"
