# Using the pattern test program, make a pattern to match the string match. Try the program with the input string beforematchafter. Does the output show the three parts of the match in the right order?

require "pry"
# ruby main.rb flinstones.txt
# ARG



def regex1

fname = "regex_exe2_1.txt"
somefile = File.open(fname, "w")
ARGF.each do |line|
    if line =~ /match/
      matches = line.match(/match/)
      somefile.puts line
      somefile.puts matches.pre_match
      somefile.puts matches[0]
      somefile.puts matches.post_match
    end
end
somefile.close
end

regex1
