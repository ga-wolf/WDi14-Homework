# SCRAPPING A WEB PAGE WITH NOKOGIRI
require 'nokogiri'
require 'open-uri'
require 'pry'

base_url = 'http://www.badtaxidermy.com/'
index = Nokogiri::HTML( open(base_url ))
name = index.css(".header .title").text.strip

puts ""
puts name

posts = index.css(".post")

posts.each do |p|

puts p.css(".title").text
puts p.css(".postimage img").attr("src").value
binding.pry
end
