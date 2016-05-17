# 2. Air Conditioning
# - Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
#     - If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
#     - If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now!  It's hot!"
#     - If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance...  It's cool..."

print "What is the current temperature?"
current_temperature = gets().to_f

print "Is the air Conditioning running? (y/n) "
air_con_running = gets().chomp().downcase

if air_con_running == "y"
  air_con_running = true
else
  air_con_running = false
end

p air_con_running

print "What is the desired temperature? "
desired_temperature = gets().to_f

if air_con_running && current_temperature > desired_temperature
  puts "Turn on the A/C Please"
else
  if !air_con_running && current_temperature > desired_temperature
    puts "Fix the A/C now! It's hot"
  else
    puts "Fix the A/C whenever you have the chance.... It's cool..."
  end
end

puts case
      when air_con_running && current_temperature > desired_temperature
        puts "Turn on the A/C Please"
      when !air_con_running && current_temperature > desired_temperature
        puts "Fix the A/C now! It's hot!"
      when !air_con_running && current_temperature < desired_temperature
        puts "Fix the A/C whenever you have the chance... It's cool...."
      end


# air_con_running =
# desired_temperature
