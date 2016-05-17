# Calculator

def menu
  puts "CALCULATOR OPERATIONS:"
  puts "  -Type (a) for addition"
  puts "  -Type (s) for subtraction"
  puts "  -Type (m) for multiplication"
  puts "  -Type (d) for division"
  puts "  -Type (e) for exponent(powers)"
  puts "  -Type (sq) for square root"
  puts "  -Type (bmi) for a BMI calculator"
  puts "  -Type (q) to quit"
  print "Enter your choice: "
  gets.chomp()
end
user_choice = menu()

def add
  print "What's your first number? "
  first_number = gets.to_f

  print "What's your second number? "
  second_number = gets.to_f

  result = first_number + second_number
  puts "#{first_number} + #{second_number} is #{result}"
end

def subtract
  print "What number would you like to subtract from? "
  first_number = gets.to_f

  print "What number would you like to subtract? "
  second_number = gets.to_f

  result = first_number - second_number
  puts "#{first_number} - #{second_number} is #{result}"
end

def multiply
  print "What's your first number? "
  first_number = gets.to_f

  print "What's your second number? "
  second_number = gets.to_f

  result = first_number * second_number
  puts "#{first_number} x #{second_number} is #{result}"
end

def divide
  print "What's your numerator (the number at the top of the fraction)? "
  first_number = gets.to_f

  print "What's your denominator (the number at the bottom of the fraction)? "
  second_number = gets.to_f

  result = first_number / second_number
  puts "#{first_number} divided by #{second_number} is #{result}"
end

def exponent
  print "What's the first number? "
  first_number = gets.to_f

  print "What's the second number? "
  second_number = gets.to_f

  result = first_number ** second_number
  puts "#{first_number} to the power of #{second_number} is #{result}"
end

def square_root
  print "What number would you like the square root of? "
  number = gets.to_f

  result = Math.sqrt(number)
  puts "The square root of #{number} is #{result}"
end

def bmi
  print "What's your weight in kilograms (I won't tell anyone...)? "
  weight = gets.to_f

  print "What's your height in meters? "
  height = gets.to_f

  result = (weight / (height * height)).to_i
  puts "Your BMI is is #{result}"
end

until user_choice == "q"
  case user_choice
  when "a" then add()
  when "s" then subtract()
  when "m" then multiply()
  when "d" then divide()
  when "e" then exponent()
  when "sq" then square_root()
  when "bmi" then bmi()
  end

  user_choice = menu()
end

puts "Thanks for using the Ruby Calculator!"
