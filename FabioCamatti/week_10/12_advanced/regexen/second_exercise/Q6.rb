# Write a new program (not the test program!) that prints out any input line ending with whitespace (other than just a newline). Put a marker character at the end of the output line so as to make the whitespace visible.

require "pry"
# ruby main.rb flinstones.txt
# ARG

def regex6
  fname = "regex_exe2_6.txt"
  somefile = File.open(fname, "w")

  ARGF.each do |line|

      if line =~ /\s$/
        matches = line.sub /\s$/, "\%"
        somefile.puts matches
      end

  end

  somefile.close
end

regex6
