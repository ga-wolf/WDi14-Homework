require "pry"
# ruby main.rb flinstones.txt
# ARG

def regex6
  fname = "regex6.txt"
  somefile = File.open(fname, "w")

  ARGF.each do |line|
      if line =~ /(?=.*fred).*(?=.*wilma).*/mi
        somefile.puts line
      end
  end

  somefile.close
end

regex6
