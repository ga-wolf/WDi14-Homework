require "pry"
# ruby main.rb flinstones.txt
# ARG



def regex1

fname = "regex1.txt"
somefile = File.open(fname, "w")

ARGF.each do |line|
    if line =~ /\bfred\b/m
      somefile.puts line
    end
end

somefile.close
end

regex1
