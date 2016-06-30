# Modify the program from the previous exercise to use named captures instead of relying on $1. Update the code to display that label name, something like 'word' contains 'Wilma'.

require "pry"
# ruby main.rb flinstones.txt
# ARG

def regex4

fname = "regex_exe2_4.txt"
somefile = File.open(fname, "w")
count = 0
ARGF.each do |line|
    count += 1
    if line =~ /\w+a\b/
      matches = line.match(/(?<word>\w+a\b)/)

      somefile.puts "The 'word' contains: '#{matches[:word]}'"
      # somefile.puts matches.pre_match
      # somefile.puts matches[0]
      # somefile.puts matches.post_match
    end
end
somefile.close
end

regex4
