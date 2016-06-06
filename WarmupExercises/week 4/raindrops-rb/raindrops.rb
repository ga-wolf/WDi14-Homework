def raindrops(num)
  # Initialize the variable that we want to return
  msg = ""

  # Append respective strings
  msg << "Pling" if num % 3 == 0
  msg << "Plang" if num % 5 == 0
  msg << "Plong" if num % 7 == 0

  # Ternary operator: structure => condition ? doSomething : doSomethingElse
  msg.empty? ? num : msg
  # No return because last executed line in a ruby method is what gets returned from a method
end

print "Please enter a number "
puts raindrops(gets.to_i)
