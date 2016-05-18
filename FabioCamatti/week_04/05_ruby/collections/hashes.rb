
require 'pry'

#WRONG
#student.name
#student["name"]
#
# student_one = {
#   :name => "Roger",
#   :class => "UXDi",
#   "Some pressing information" => false
# }
#
#
# student_two = {
#   name: "Roger"
# }
#
# p student_two[:name]

pressing_information = {
  :movies => ["Satantango", "Toy Story 3"],
  :class => "WDi",
  :events => ["SydJS"],
  :about_me => true
}

p pressing_information[:class]
p pressing_information[:events]
p pressing_information[:movies][1]

serge = {
  :occupation => "Musician"
  # :nationality => "French"
}

serge[:nationality] = "French"
serge[:spouse] = "Jane"
serge[:spouse] = "Jane temporarily"

p serge[:spouse]

serge.delete(:spouse)

p serge[:spouse]

p serge.keys()
p serge.values()

# serge.each do |info|
#   p "This just ran: #{info}"
#   p "Key: #{ info[0] }"
#   p "Value: #{info[1]}"
# end

serge.each do |key, value|
  p "Key: #{key}. Value:#{value}"
end



# binding.pry
puts""
