class Fibonacci

  def fib(n)

    if n <= 2
      1
    else
      fib(n-1) + fib(n-2)
    end

  end

  def fib_iter(n)

    if n <= 2
      return 1
    end

      nums= [1,1]

      (2..n-1).each do |i|
        nums[i] = nums[i-1] + nums[i-2]
      end

      nums
  end

end


f = Fibonacci.new
n = gets.chomp.to_i
puts f.fib_iter(n)
