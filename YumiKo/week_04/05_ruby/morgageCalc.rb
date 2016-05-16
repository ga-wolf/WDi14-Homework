# If you buy a house which price is A, and pay it for B months, your monthly payment is A/B when the interest rate is 0.

puts "Mortgage Calculator"

puts "Let's find out your monthly pay for the new house"

print "How much is the house?($)"

house_price = gets.to_f

print "How long do you want to pay it for?(month)"

payment_period = gets.to_i

monthly_payment = house_price/payment_period

puts "You have to pay #{monthly_payment} for #{payment_period} months assuming 0 interest."
