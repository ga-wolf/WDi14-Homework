require "active_record"
require 'sqlite3'
require "pry"
# require "sinatra"
# require "sinatra/reloader"

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.db'
);

# :: means module - to be futher understood
ActiveRecord::Base.logger = Logger.new(STDERR)

class User < ActiveRecord::Base
end

#CREATE

# u = User.new
# u.first_name = "Justin"
# u.last_name = "Time"
# u.username = "justintime"
# u.description = "Great work"
# u.save

User.create({
  :first_name => "Simon",
  :last_name => "Says",
  :username => "simonsays",
  :description => "Still great work"
  })

#READ
all_users = User.all
first_user = User.first # First user in the database
user_with_id_2 = User.find 2
user_with_name_bill = User.find_by( :first_name => "Django" )
another_user = User.find_by( :first_name => "Bill", :last_name => "Withers" )

#UPDATE

# user = User.find_by :first_name => "Bill"
# user.last_name = "Murray"
# user.save
#
# user = User.find_by :first_name => "Bill"
# user.update :first_name => "William"

#DELETE

user = User.find ( 5 )
user.destroy

# User.destroy_all

binding.pry
puts ""
