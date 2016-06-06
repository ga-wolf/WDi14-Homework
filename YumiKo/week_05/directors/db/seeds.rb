# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Director.destroy_all

Director.create :name => "Chen Kaige", :nationality => "Chinese", :dob => "1952/08/12", :image => "http://cdn0.walkerartcenter.org/static/cache/46/461e482d60267def4112c28ff84b03f8.jpg"
Director.create :name => "Gus Van Sant", :nationality => "American", :dob => "1952/07/24", :image => "http://cdn.collider.com/wp-content/image-base/People/G/Gus_Van_Sant/gus_van_sant_01.jpg"

Movie.destroy_all

Movie.create :title => "Farewell My Concubine", :poster => "http://static1.squarespace.com/static/525afc27e4b0c7aebf292b80/t/55a2e102e4b01836d3504012/1436737796639/farewell-my-concubine.jpg?format=750w", :year => "1993",:genre => "Drama", :running_time => "171", :description => "Tragic love story"
