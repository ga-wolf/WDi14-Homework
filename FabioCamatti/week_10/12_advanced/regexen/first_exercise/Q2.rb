require "pry"
# ruby main.rb flinstones.txt
# ARG


def regex2

fname = "regex2.txt"
somefile = File.open(fname, "w")

ARGF.each do |line|
    if line =~ /fred/im
      somefile.puts line
    end
end
somefile.close
end

regex2
