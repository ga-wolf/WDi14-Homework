# Mortgage Calculator
#
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
#
# r - the monthly interest rate, expressed as a decimal, not a percentage. Since the quoted yearly percentage rate is not a compounded rate, the monthly percentage rate is simply the yearly percentage rate divided by 12; dividing the monthly percentage rate by 100 gives r, the monthly rate expressed as a decimal.
# N - the number of monthly payments, called the loan's term, and
# P - the amount borrowed, known as the loan's principal.
# In the standardized calculations used in the United States, c is given by the formula:[4]
#
# c = \frac{r P}{1-(1+r)^{-N}} = \frac {rP(1+r)^N}{(1+r)^N-1}.
def menu

  puts "(m) - mortage calculator"
  # puts "(r) - interest rate"            ##makes new line
  # puts "(n) - number of monthly payments"
  # puts "(p) - amount borrow as the loan's principal"
  puts "(q) - quit mortgage calculator"

  gets.chomp()
end
user_choice = menu()

  def mortgage
    print "What is your amount borrowed? "
    amount = gets.to_f ## turns inputs into a float

    print "What is your interest rate? "
    interest = gets.to_f
  ## tha math of 2 inputs given
    print "How many years? "
    years = gets.to_f
    result = ((amount * interest) + amount / years / 12)
  ## prints the result out
    puts "Your mortage will be #{result}"

  end
  until user_choice == "q"

    case  user_choice
    when "m" then mortgage()
    else
      puts "invalid selection, dingus."
  end

  user_choice = menu()

end
