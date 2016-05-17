# BMI Calculator
#
# Calculate the body mass index (BMI) for an individual, given their height and weight

# BMI = kg * (height * height)

  print "What is your weight in kgs?"
  weight = gets.to_f

  print "What is your height in cms?"
  height = gets.to_f / 100

  result = weight * (height * height)

  puts "Your BMI is #{result.round}"  
