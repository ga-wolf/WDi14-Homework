# var hello = function () {
#
#
# }


def hello
  puts "Hi"
end

hello
hello()

5.times do
  hello
end

#
# def hello( name )
#   puts "Hello #{name}"
# end
#
# hello("GA")


def hello( name = "World" )
  puts "Hello #{name}"
end

hello()
hello("GA")


def hello( name = "World", end_punctuation = "!" )
  puts "Hello #{name}#{end_punctuation}"
end

hello()
hello( "Jane", "." )
hello( "Bill", "!!!!" )
hello("Bill")
