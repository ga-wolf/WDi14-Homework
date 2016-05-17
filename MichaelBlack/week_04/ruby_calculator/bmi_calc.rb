# BMI Calculator
#
# Calculate the body mass index (BMI) for an individual, given their height and weight
# To work out your BMI:
# divide your weight in kilograms (kg) by your height in metres (m)
# then divide the answer by your height again to get your BMI.

# 凸(｀0´)凸

puts "BMI Calculator"

def menu
  puts "Please make your selection from the following: "
  puts "(n) - New Calculation"
  puts "(q) - Quit"
  print "Enter selection: "
  gets().chomp().downcase()
end

user_select = menu()

def bmi_calc
  print "Enter your weight (Kg): "
  user_weight = gets().to_f
  print "Enter your height (m): "
  user_height = gets().to_f

  result = (user_weight / user_height) / user_height

  puts "Your BMI is: #{result}"
end

until user_select == "q"

  if user_select == "n"
    bmi_calc()
  else
    "Invalid selecation"
  end

  user_select = menu()
end

puts "Bye."
