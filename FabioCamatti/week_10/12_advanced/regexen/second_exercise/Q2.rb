# Using the pattern test program, make a pattern that matches if any word (in the \w sense of word) ends with the letter a. Does it match wilma but not barney? Does it match Mrs. Wilma Flintstone? What about wilma&fred? Try it on the sample text file from the last exercises (and add these test strings if they weren’t already in there).

require "pry"
# ruby main.rb flinstones.txt
# ARG



def regex2

fname = "regex_exe2_2.txt"
somefile = File.open(fname, "w")
ARGF.each do |line|
    if line =~ /\w+a\b/
      matches = line.match(/\w+a\b/)
      somefile.puts line
      # somefile.puts matches.pre_match
      # somefile.puts matches[0]
      # somefile.puts matches.post_match
    end
end
somefile.close
end

regex2
