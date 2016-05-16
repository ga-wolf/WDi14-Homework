# Mortgage Calculator
#
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)

#  (╯°□°）╯︵ ┻━┻
# (╯°□°）╯︵ ┻━┻

puts "Welcome to the most amazing loan repayment calculator"

# Menus are good.
def menu
  puts "Please select from the menu: "
  puts "(n) - New calculation"
  puts "(q) - Exit"
  print "Choose wisely: "
  gets().chomp().downcase()
end

user_select = menu()

# calc method to be called on user selection of 'n'
def calc
  print "Enter total loan amount ($): "
  total_loan_amount = gets().to_i

  print "Enter intrest rate (percent): "
  intrest_rate = gets().to_i

  print "Enter term of loan (years): "
  loan_term = gets().to_i

# I am certain this is not how you calculate monthly repayments... wtf is compound intrest?
  total_intrest = total_loan_amount * (intrest_rate / 100)
  total_repay = total_loan_amount + total_intrest

  total_months = loan_term * 12

  monthly_payment = total_repay / total_months

  puts "Your monthly repayments will be: $#{monthly_payment}"
end

# Loop while user selection is not q
until user_select == "q"

  if user_select == "n"
    calc()
  else
    "Invalid selection"
  end

  user_select = menu()
end

puts "Thanks for using the most impressive repayment calculator made. (cuase its broken)"
