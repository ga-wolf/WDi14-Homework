# Extra credit exercise: modify the program from the previous exercise so that immediately following the word ending in a it will also capture up-to-five characters (if there are that many characters, of course) in a separate capture variable. Update the code to display both capture variables. For example, if the input string says I saw Wilma yesterday, the up-to-five characters are "yest". If the input is I, Wilma!, the extra capture should have just one character. Does your pattern still match just plain wilma?



require "pry"
# ruby main.rb flinstones.txt
# ARG

def regex5

fname = "regex_exe2_5.txt"
somefile = File.open(fname, "w")
count = 0
ARGF.each do |line|
    count += 1
    if line =~ /(\w+a\b\S\w{1,5})|(\w+a\b).(\w{1,5})/
      matches = line.match(/(?<wilma>\w+a\b\S\w{1,5})|(?<wilma>\w+a\b).(?<rest>\w{1,5})/)
      somefile.puts "#{count}: The first 'word' contains: '#{matches[:wilma]}' and the second contains '#{matches[:rest]}'"
      # somefile.puts matches.pre_match
      # somefile.puts matches[0]
      # somefile.puts matches.post_match
    end
end
somefile.close
end

regex5
