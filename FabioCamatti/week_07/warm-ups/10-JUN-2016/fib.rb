def fibonacci(n)
   n <= 1 ? n :  fibonacci( n - 1 ) + fibonacci( n - 2 )
   n.times do |n|
       result = fibonacci(n)
       puts result
   end
end
puts fibonacci( 10 )
