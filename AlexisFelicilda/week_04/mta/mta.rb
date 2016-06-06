require 'pry'

@mta = {
  :n_line => ["Times Square", "34th", "28nline", "23nline", "Union Square", "8nline"],
  :l_line => ["8th", "6th", "Union Square", "3rd", "1st"],
  :six_line => ["Grand Central", "33rd", "28sixline", "23sixline", "Union Square", "Astor Place"]
}
p @mta

def plan_trip(@from_line, @from_station, @to_line, @to_station)

puts "What station are you at? "
@from_station = gets.downcase.chomp
@mta.each do |line, stations|
  @from_line = "#{line}"
  stations.each do |station|
    if @from_station == station
      puts " You must start at the #{line}"
    end
  end
end

puts "What station would you like to go to? "
@to_station = gets.downcase.chomp
@mta.each do |line, stations,|
  @to_line = "#{line}"
  stations.each do |station|
      if @from_line != @to_line && @to_station == station
      puts " You will have to change at Union Square "
      puts " You will have to take the #{line}"
    end
  end
end
