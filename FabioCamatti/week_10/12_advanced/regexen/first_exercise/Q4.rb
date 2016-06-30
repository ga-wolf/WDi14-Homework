require "pry"
# ruby main.rb flinstones.txt
# ARG

def regex4
  fname = "regex4.txt"
  somefile = File.open(fname, "w")

  ARGF.each do |line|
      if line =~ /\b[A-Z]/m
        somefile.puts line
      end
  end

  somefile.close
end

regex4
