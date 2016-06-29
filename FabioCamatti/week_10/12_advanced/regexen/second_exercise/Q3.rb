# Modify the program from the previous exercise so that the word ending with the letter a is captured into $1. Update the code to display that variable’s contents in single quotes, something like $1 contains 'Wilma'.

require "pry"
# ruby main.rb flinstones.txt
# ARG



def regex3

fname = "regex_exe2_3.txt"
somefile = File.open(fname, "w")
count = 0
ARGF.each do |line|
    count += 1
    if line =~ /\w+a\b/
      matches = line.match(/\w+a\b/)

      somefile.puts "The var \$1 contains: '#{matches[0]}' on line #{count}"
      # somefile.puts matches.pre_match
      # somefile.puts matches[0]
      # somefile.puts matches.post_match
    end
end
somefile.close
end

regex3
