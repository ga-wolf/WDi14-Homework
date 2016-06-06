

# def hello
#   puts "Hi"
# end
#
# 18.times do
#   hello()
# end

# def hello( name )
#   puts "Hello #{name}"
# end
#
#
# def hello( name = "World" )
#   puts "Hello #{name}"
# end
#
# hello()
# hello("Roger")

def hello ( name = "World" , end_punctuation = "!" )
  puts "Hello #{name}#{end_punctuation}"
end

hello( "Jane", ".")
hello( "Jane")
