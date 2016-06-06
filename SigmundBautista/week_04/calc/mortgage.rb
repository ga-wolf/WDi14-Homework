
def mortgage
  print "What is the principle amount: "
  principle = gets.to_f
  print "What is the average interest rate: "
  interest = gets.to_f
  print "What is the term of your mortgage in years: "
  years = gets.to_i


  total = principle*((1 + interest / 12) ** years)
  repayments = total / (years * 12)

  puts "your total mortgage payable over #{years}, at an interest rate of #{interest} is equal to $#{total.round}."
  puts "your monthly repayment is equal to $#{repayments.round}."
end


mortgage()
