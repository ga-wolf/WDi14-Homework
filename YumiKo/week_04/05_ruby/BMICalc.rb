# BMI Calculator
#
# Calculate the body mass index (BMI) for an individual, given their height and weight
#


puts "BMI Calculator"

print "Enter your height(cm)"

height = gets.to_f

print "Enter your weight(kg)"

weight = gets.to_f

bmi = weight/((height/100)*(height/100))

puts "Here's the result. Your BMI is #{bmi} "

case
when bmi<18.5
  puts "You are underweight."
when bmi>=18.5 && bmi<25
  puts "You are at a healthy weight for your height."
when bmi>=25 && bmi>30
  puts "You are slightly overweight."
else
  puts "You are heavily overweight."
end
