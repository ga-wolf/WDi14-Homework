# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Author.destroy_all

Author.create :name => "Raymond E. Feist", :nationality => "American", :dob => "1945/12/23", :alive => true, :image => "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Raymond_Elias_Feist_20080316_Salon_du_livre_1.jpg/150px-Raymond_Elias_Feist_20080316_Salon_du_livre_1.jpg"

Book.create :title => "Magician", :series => "Rift war saga", :volume => 1, :year => "1980", :image => "Magic.jpg"
