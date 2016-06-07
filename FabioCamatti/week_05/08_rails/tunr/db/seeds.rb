# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#
User.destroy_all

u1 = User.create :email => 'craigsy@ga.co', :password => 'chicken', :password_confirmation => 'chicken', :admin => true

u2 = User.create :email => 'jonesy@ga.co', :password => 'chicken', :password_confirmation => 'chicken', :admin => true

u2 = User.create :email => 'fabio@ga.co', :password => 'chicken', :password_confirmation => 'chicken', :admin => false

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

g1.songs << s1 << s2
g2.songs << s2 # This create a new record in the genres_songs table, that will contain the id of the second genre and the id of the second song,
g3.songs << s3

puts "Genre one song count: #{g1.songs.count}"
puts "Genre two song count: #{g2.songs.count}"
puts "Genre three song count: #{g3.songs.count}"

puts "Song one genre count: #{s1.genres.count}"
puts "Song two genre count: #{s2.genres.count}"
puts "Song three genre count: #{s3.genres.count}"


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

# These will all create records in the mixtapes_songs table (it will keep track of the mixtape_id and the song_id)
m1.songs << s1 << s2 << s3
m2.songs << s2 << s3
m3.songs << s1

puts "First mixtape song count: #{m1.songs.count}"
puts "Second mixtape song count: #{m2.songs.count}"
puts "Third mixtape song count: #{m3.songs.count}"

puts "First song mixtape count: #{s1.mixtapes.count}"
puts "Second song mixtape count: #{s2.mixtapes.count}"
puts "Third song mixtape count: #{s3.mixtapes.count}"


puts "\n\nTesting has many :through relationships...\n"
puts "First artist genre count: #{r1.genres.count}"
puts "Second artist genre count: #{r2.genres.count}"
puts "Third artist genre count: #{r3.genres.count}"

puts "First artist album count: #{r1.albums.count}"
puts "Second artist album count: #{r2.albums.count}"
puts "Third artist album count: #{r3.albums.count}"
