require 'pry'

f = File.open "movie_db.txt", "r"


def add_movie
    puts "add_movie -- "
    print "name: "
    name = gets.chomp
    print "length: "
    dur = gets.chomp
    print "rating: "
    rate = gets.chomp
    f = File.open "movie_db.txt", "a+"
    f.puts "#{name},#{dur},#{rate}"
    f.close
    # binding.pry
end

def display_movie movie
    s_name = movie[0];
    s_dur = movie[1];
    s_rate = movie[2];
    p "Name: #{s_name}"
    p "Duration: #{s_dur}"
    p "Rating: #{s_rate}"
end

all_lines = f.readlines

# all_lines.each do |line|
#     movie = line.chomp.split ","
#     display_movie movie
# end

add_movie




f.close
