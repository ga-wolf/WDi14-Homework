# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all

u1 = User.create :username => 'bozly', :email => 'boz@ga.co', :password => 'admin', :password_confirmation => 'admin', :admin => true

u2 = User.create :username => 'meh', :email => 'meh@ga.co', :password => 'admin', :password_confirmation => 'admin'

u3 = User.create :username => 'Sherif', :email => 'sherif@ga.co', :password => 'admin', :password_confirmation => 'admin'

Project.destroy_all

p1 = Project.create :title => "Cure cancer", :description => "All types, not just one or two."

p2 = Project.create :title => "Achieve world peace", :description => "Serif is all over it."

p1.users << u1 << u2 << u3
p2.users << u3

puts "User one project count: #{u1.projects.count}"
puts "User two project count: #{u2.projects.count}"
puts "User three project count: #{u3.projects.count}"

Task.destroy_all

t1 = Task.create :title => "Step 1", :description => "Create cure"
t2 = Task.create :title => "Step 2", :description => "Distribute cure"
t3 = Task.create :title => "Step 3", :description => "?????"
t4 = Task.create :title => "Step 4", :description => "Profit"
t5 = Task.create :title => "Call Sherif", :description => "Get Sherif on the phone, tell him to get cracking on worl peace."

p1.tasks << t1 << t2 << t3 << t4
p2.tasks << t5

puts "Project one task count: #{p1.tasks.count}"
puts "Project two task count: #{p2.tasks.count}"
