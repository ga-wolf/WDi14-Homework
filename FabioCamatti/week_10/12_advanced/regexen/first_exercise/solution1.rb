require "pry"
# ruby main.rb flinstones.txt
# ARG



def solution1

fname = "solution1.txt"
somefile = File.open(fname, "w")

ARGF.each do |line|

      somefile.puts line =~ /[Ff]red/

end

somefile.close
end

solution1
