#BY SHERIFF
def raindrops(num)
  msg = ""

  msg << "Pling" if num % 3 == 0
  msg << "Plang" if num % 5 == 0
  msg << "Plong" if num % 7 == 0
  # Online IF conditional
  msg.empty? ? num : msg

  # if msg.empty?
  #   num
  # else
  #   msg
  # end
end

puts raindrops(35)
