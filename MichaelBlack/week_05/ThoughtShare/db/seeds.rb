# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all

u1 = User.create :name => "Michael", :email => "mb@ga.co", :password =>'chicken', :password_confirmation => 'chicken', :image => 'image.jpg'

u2 = User.create :name => "Admin", :email => "admin@ga.co", :password =>'admin', :password_confirmation => 'admin', :image => 'imagea.jpg'


Post.destroy_all

p1 = Post.create :body => "Well, this is fun..."
p2 = Post.create :body => "Isn't it though?"
p3 = Post.create :body => "..."
p4 = Post.create :body => "Yes, yes it is."

u1.posts << p1 << p2
u2.posts << p3 << p4

puts "Posts from user one: #{u1.posts.count}"
puts "Posts from user two: #{u2.posts.count}"
