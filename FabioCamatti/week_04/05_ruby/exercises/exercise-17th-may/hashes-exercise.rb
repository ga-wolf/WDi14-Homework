# #Array and Hash access
#
# ### A. Given the following data structure:
#
# ```ruby
require "pry"

a = ["Anil", "Erik", "Jonathan"]

# ```
#
# 1. How would you return the string `"Erik"`?
a[1]

# 1. How would you add your name to the array?
#
a << "Fabio"

# ### B. Given the following data structure:
#
# ```ruby
h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
# ```
#
# 1. How would you return the string `"One"`?
h[0]

# 1. How would you return the string `"Two"`?
h[:two]

# 1. How would you return the number `2`?
h["two"]

# 1. How would you add `{3 => "Three"}` to the hash?
h[3] = "Three"


# 1. How would you add `{:four => 4}` to the hash?
h[:four] = 4

# ### C. Given the following data structure:
#
# ```ruby
is = {true => "It's true!", false => "It's false"}
# ```
#
# 1. What is the return value of `is[2 + 2 == 4]`?
# is[ 2 + 2 == 4 ]
# is [ 4 == 4 ]
# is [true]

is[ 2 + 2 == 4 ] # equals to => "It's true!"

# 1. What is the return value of `is["Erik" == "Jonathan"]`?
is["Erik" == "Jonathan"] # equals to => "It's false!"

# 1. What is the return value of `is[9 > 10]`?
is[9 > 10] # equals to => "It's false!"

# 1. What is the return value of `is[0]`?
is[0] # equals to => nil

#solution
p is[0] # => nil
is.default = "Something else"
p is[0] # => "Someting else"

# 1. What is the return value of `is["Erik"]`?
is["Erik"] # equals to => nil

#from solution
p is["Erik"] # => "Someting else"

# ### D. Given the following data structure:
#
# ```ruby
users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}
# ```
#
# 1. How would you access Jonathan's Twitter handle (i.e. the string `"tronathan"`)?
p users["Jonathan"][:twitter]

# 1. How would you add the number `7` to Erik's favorite numbers?
 users["Erik"][:favorite_numbers] << 7
p users["Erik"][:favorite_numbers]

# 1. How would you add yourself to the users hash?
#solution
users["Fabio"] = {
  :twitter => "fbo",
  :favorite_numbers => [33, 12, 14]
}

p users
# 1. How would you return the array of Erik's favorite numbers?
p users["Erik"][:favorite_numbers]

# 1. How would you return the smallest of Erik's favorite numbers?
# solution
p users["Erik"][:favorite_numbers].min

# 1. How would you return an array of Anil's favorite numbers that are also even?
p users["Anil"][:favorite_numbers].select { |e| e.even?  }

# 1. How would you return an array of the favorite numbers common to all users?
#solution
anils_numbers = users["Anil"][:favorite_numbers]
erik_numbers = users["Erik"][:favorite_numbers]
jonathan_numbers = users["Jonathan"][:favorite_numbers]
fabio_numbers = users["Fabio"][:favorite_numbers]

p anils_numbers & jonathan_numbers & erik_numbers & fabio_numbers



# 1. How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
p (anils_numbers + jonathan_numbers + erik_numbers + fabio_numbers).sort.uniq
