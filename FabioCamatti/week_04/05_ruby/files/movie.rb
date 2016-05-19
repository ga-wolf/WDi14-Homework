require "pry"

#We open up an instance of the File class movie_db.txt is the file we opened
#We opened it in read only mode ("r") (starting at the beginning of the file)
f = File.open "movie_db.txt", "r"

# We store an array of every line in the file
all_lines = f.readlines
# p all_lines

def add_movie
  puts "Time to add a movie!"
  print "What is the name of it? "
  name = gets.chomp

  print "How long is it? "
  duration = gets.chomp

  print "What is the rating? "
  rating = gets.chomp

  f = File.open "movie_db.txt", "a+"
  f.puts "#{name}, #{duration}, #{rating}"
  f.close

end

add_movie
#chomp method removes "\n" new line symbol or char.
# satantango = all_lines[0].chomp
# satantango = satantango.split ","
# p satantango
# s_name = satantango[0]
# s_durantion = satantango[1]
# s_rating = satantango[2]
#
# p "Name: #{s_name}"
# p "Duration: #{s_durantion}"
# p "Rating: #{s_rating}"
#
# toy_story = all_lines[1].chomp
# toy_story = toy_story.split ","
# p toy_story
# s_name = toy_story[0]
# s_durantion = toy_story[1]
# s_rating = toy_story[2]
#
# p "Name: #{s_name}"
# p "Duration: #{s_durantion}"
# p "Rating: #{s_rating}"

# Ruby can only open up connections to 1000 files or databases at a time, so we always need to clse the files

def display_movie(movie)
  movie.chomp!
  movie_details = movie.split ","

  movie_name = movie_details[0]
  movie_duration = movie_details[1]
  movie_rating = movie_details[2]

  puts ""
  puts "Name: #{movie_name}"
  puts "Duration: #{movie_duration}"
  puts "Rating: #{movie_rating}"

end

all_lines.each do |line|
  display_movie( line )
end


# display_movie( all_lines[0] )
# display_movie( all_lines[1] )
# display_movie( all_lines[2] )



f.close
puts ""
