
def bmi
  print "What is your weight in Kilograms: "
  user_weight = gets.to_i
  print "what is your height in meters: "
  user_height = gets.to_f

  user_bmi = user_weight / (user_height ** 2)
  puts "your BMI is #{user_bmi.round}"
end

bmi()
