def missing_number(numbers)
  n = numbers.length
  numbers = numbers.sort
  for i in 1..n
    return i if i != numbers[i - 1]
  end

  return -1
end

def missing_number2(numbers)
  n = numbers.length + 1

  (n * (n + 1)) / 2 - numbers.reduce(:+)
end

a = [3, 2, 5, 4, 1, 8, 6, 9, 10]
puts missing_number(a)
puts missing_number2(a)
