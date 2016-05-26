# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Artist.destroy_all
Artist.create :name => "Joan", :nationality => "Spanish", :dob => "1893/04/20", :period => "20th Century", :image => "http://www.joan-miro.net/images/joan-miro.jpg"

Work.destroy_all

Work.create :title => "The Flight of the Dragonfly in Front of the Sun", :year => '1968', :medium => "oil on canvas", :style => "Abstract", :image => "https://mir-s3-cdn-cf.behance.net/project_modules/disp/be7a65178992.5600818b2dd15.jpg"
