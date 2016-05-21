require 'sqlite3'
require 'active_record'
require 'pry'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.db'
);

ActiveRecord::Base.logger = Logger.new(STDERR);

# CREATE A CLASS FOR IT

class User < ActiveRecord::Base
end

# READ
all_users = User.all;
first_user = User.first;
user_with_id = User.find(2);
user_with_name_bill = User.find_by(:first_name => "Bill", :last_name => "Where");

# CREATE
u = User.new;
u.first_name = "Justin";
u.last_name = "Time";
u.username = "justintime";
u.description = "great work"
u.save

# CREATE 2

u2 = User.create({
    :first_name => 'firstname',
    :last_name => 'last_name',
    :username => 'username',
    :description => 'description'
});

# UPDATE 1

bill_murray = User.find_by(:first_name => 'Bill');
bill_murray.last_name = "Murray";
bill_murray.save;

# Update 2

will_murray = User.find_by(:first_name => 'Bill');
will_murray.update(:first_name => "William");
will_murray.save

# DELETE

cedric = User.find(5);
cedric.destroy();

# User.destroy_all 


binding.pry

puts "";
