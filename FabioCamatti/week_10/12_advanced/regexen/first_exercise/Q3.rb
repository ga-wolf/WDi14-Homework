require "pry"
# ruby main.rb flinstones.txt
# ARG

def regex3
  fname = "regex3.txt"
  somefile = File.open(fname, "w")

  ARGF.each do |line|
      if line =~ /\./im
        somefile.puts line
      end
  end

  somefile.close
end

regex3
