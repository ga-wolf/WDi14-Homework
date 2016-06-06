# x
# #Array and Hash access
#
# ### A. Given the following data structure:
#
# ```ruby
# a = ["Anil", "Erik", "Jonathan"]
# ```
#
# 1. How would you return the string `"Erik"`?
# 1. How would you add your name to the array?
#
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
#
# ### C. Given the following data structure:
#
# ```ruby
 is = {true => "It's true!", false => "It's false"}
# ```
#
# 1. What is the return value of `is[2 + 2 == 4]`?
# 1. What is the return value of `is["Erik" == "Jonathan"]`?
# 1. What is the return value of `is[9 > 10]`?
# 1. What is the return value of `is[0]`?
# 1. What is the return value of `is["Erik"]`?
#
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
users["Jonathan"][:twitter]
# 1. How would you add the number `7` to Erik's favorite numbers?
users["Erik"][:favorite_numbers] << 7
# 1. How would you add yourself to the users hash?
users["Fabio"] = { :twitter => "fbo", :favorite_numbers => [2, 12, 14]}
# 1. How would you return the array of Erik's favorite numbers?
users["Erik"][:favorite_numbers]
# 1. How would you return the smallest of Erik's favorite numbers?
users["Erik"][:favorite_numbers].min
# =>                            .max => 24
# =>                            .minmax => 7,24
# 1. How would you return an array of Anil's favorite numbers that are also even?
users["Anil"][:favorite_numbers].select {|e| e.even? }
# 1. How would you return an array of the favorite numbers common to all users?
anil_numbers = users["Anil"][:favorite_numbers]
erik_numbers = users["Erik"][:favorite_numbers]
jonathan_numbers = users["Jonathan"][:favorite_numbers]
fabio_numbers = users["Fabio"][:favorite_numbers]

anil_numbers & erik_numbers & jonathan_numbers & fabio_numbers


# 1. How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
(anil_numbers + erik_numbers + jonathan_numbers + fabio_numbers).sort.uniq
