require "pry"
# ruby main.rb flinstones.txt
# ARG

def regex5
  fname = "regex5.txt"
  somefile = File.open(fname, "w")

  ARGF.each do |line|
      if line =~ /(.(?!\s))\1/mi
        somefile.puts line
      end
  end

  somefile.close
end

regex5
