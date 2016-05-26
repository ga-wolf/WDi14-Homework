# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#
User.destroy_all

u1 = User.create :email => 'craigs@ga.co', :password => 'chicken', :password_confirmation => 'chicken', :admin => true

u2 = User.create :email => 'jonesy@ga.co', :password => 'chicken', :password_confirmation => 'chicken', :admin => true

puts "User count: #{User.all.count}"

Song.destroy_all

s1 = Song.create :name => "All by electricity"

s2 = Song.create :name => "Marianas Trench"

s3 = Song.create :name => "Have a safe trip, dear"

puts "Song count: #{Song.all.count}"

Album.destroy_all

a1 = Album.create :name => 'Engine takes to the water'

a2 = Album.create :name => 'From the vapor to the gasoline'

a3 = Album.create :name => 'Systems/Layers'

puts "Album count: #{Album.all.count}"

# song belongs_to an album, an album has_many songs

# s1.album_id = a1.id
# s1.save
a1.songs << s1
# .songs methos is define by has_many :songs in albums.rb
  # When we use that method, it tries to find all songs with the particular album's id stored in the album_id column
    # It will always return an array
a2.songs << s2
a3.songs << s3
# When we use the append operator (<<), it will change the album_id on a song to have the id of whichever album was specified
  # Then it will save those changes

puts "Song count on first album: #{a1.songs.count}"
puts "Song count on second album: #{a2.songs.count}"
puts "Song count on third album: #{a3.songs.count}"

puts "Album count on first song: #{s1.album.name}"
puts "Album count on second song: #{s2.album.name}"
puts "Album count on third song: #{s3.album.name}"


Genre.destroy_all

g1 = Genre.create :name => 'Nautical Text Rock'

g2 = Genre.create :name => 'Math rock'

g3 = Genre.create :name => 'Chamber pop'

puts "Genres count: #{Genre.all.count}"


Artist.destroy_all

r1 = Artist.create :name => 'June of 44'

r2 = Artist.create :name => 'The Mercury Program'

r3 = Artist.create :name => 'Rachels'
puts "Artist count: #{Artist.all.count}"


r1.songs << s1  # This will change the artist_id column on the first song, and then save it - this makes the association
r2.songs << s2
r3.songs << s3

puts "First artist song count #{r1.songs.count}"
puts "Second artist song count #{r2.songs.count}"
puts "Third artist song count #{r3.songs.count}"

puts "Name of the artist that wrote sone one: #{s1.artist.name}"
puts "Name of the artist that wrote sone two: #{s2.artist.name}"
puts "Name of the artist that wrote sone three: #{s3.artist.name}"


Mixtape.destroy_all

m1 = Mixtape.create :title => 'Fire'

m2 = Mixtape.create :title => 'Easter tunes'

m3 = Mixtape.create :title => 'Code jams'

puts "Mixtape count: #{Mixtape.all.count}"

u1.mixtapes << m1
u2.mixtapes << m2 << m3

puts "User one mixtape count: #{u1.mixtapes.count}"
puts "User two mixtape count: #{u2.mixtapes.count}"

puts "User of first mixtape: #{m1.user.email}"
puts "User of second mixtape: #{m2.user.email}"
puts "User of third mixtape: #{m3.user.email}"
