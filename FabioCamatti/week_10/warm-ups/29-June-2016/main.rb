# # Wordy Calculator 2
#
# Write some code that takes word problems in the following formats:
#
# > What is 5 plus 13?
#
# > What is 7 minus 5?
#
# > What is -6 multiplied by 4?
#
# > What is 25 divided by -5?
#
# and returns the answer as an integer.

require "pry"
line = "What is 5 plus 13?"
# Nesting of capture groups, extract full name, and both parts... string "name is Doe, John"
if result = line.match(/What is ((-\d|\d)(\w)(-\d|\d))/)
  fullname, firstname, lastname = result.captures
  binding.pry
end
