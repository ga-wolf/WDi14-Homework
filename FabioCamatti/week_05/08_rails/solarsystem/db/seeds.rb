# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Planet.destroy_all

p1 = Planet.create :name => "Earth", :orbit => 1, :moons => 1, :diameter => 12734

mars = Planet.create :name => "Mars", :orbit => 1.5, :moons => 2, :diameter => 6779

venus = Planet.create :name => "Venus", :orbit => 0.7, :moons => 0, :diameter => 12104

jupiter = Planet.create :name => "Jupiter", :orbit => 3.7, :moons => 7, :diameter => 139822

neptune = Planet.create :name => "Neptune", :orbit => 8.6, :moons => 3, :diameter => 49244
