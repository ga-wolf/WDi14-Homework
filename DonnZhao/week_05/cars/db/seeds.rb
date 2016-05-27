# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Brand.destroy_all

Brand.create :name => "Audi", :headquarters => "Germany", :web => "audi.com", :image => "http://www.bigbigtrans.com/images/manufacturers/audi.png"


Model.destroy_all
Model.create :name => "q1", :dob =>"2000/10/10", :image => "http://media.caranddriver.com/images/media/339152/rossion-q1-photo-350096-s-429x262.jpg", :price =>"1$"
