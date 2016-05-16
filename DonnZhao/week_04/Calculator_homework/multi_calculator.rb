def menu
  puts "(m_m) - monthly_mortgage"
  puts "(bmi) - bmi calculator"
  puts "(trip) - trip calculator"
  puts "(q) - quitting"
  gets.chomp()
end

user_choice = menu()

p user_choice

def m_m
  puts " what is your principal(the amount you borrowed)?"
  principal = gets.to_f
  puts 'what is your annual interest rate?'
  monthly_rate = gets.to_f / 12
  puts 'what is your loan term (30years? 20years?)?'
  number_montly = gets.to_i * 12

  result = (monthly_rate*principal*((1+monthly_rate)**number_montly))/(((1+monthly_rate)**number_montly) -1)
 puts " Your monthly payment is #{result}."
 end


def bmi
  puts "what is your kg of weight?"
  weight = gets.to_f
  puts "what is your height in m?"
  height = gets.to_f
result = weight/ height**2
puts "Your BMI is #{result}."
end

def trip
  puts "what is the trip distance in km ?"
  distance = gets.to_f
  puts "how many km your car runs per liter of petrol? "
  km_liter = gets.to_f
  puts "how much is the petrol per liter ?"
  price_liter = gets.to_f
  puts "how many km your can runs per hour?"
  km_hour = gets.to_f

  triptime = distance/km_hour
  cost = (distance/km_liter ) * price_liter
  puts "your trip will cost #{triptime} hours and $#{cost} petrol intotal."
end

until user_choice == 'q'
  case user_choice
  when 'm_m' then puts 'monthly_mortgage calculator'
    m_m()
  when 'bmi' then puts 'bmi calculator'
    bmi()
  when 'trip' then puts 'trip calculator'
    trip()
  else puts 'Invalid selection'
  end
  user_choice = menu()
end
puts 'thanks you for using our multifunction calculator'
