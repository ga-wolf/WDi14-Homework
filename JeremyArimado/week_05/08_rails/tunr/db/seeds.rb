User.destroy_all()

u1 = User.create :email => 'craigsy@ga.co', :password => 'chicken', :password_confirmation => 'chicken', :admin => true
u2 = User.create :email => 'jonsey@ga.co', :password => 'chicken', :password_confirmation => 'chicken', :admin => true

puts "User count: #{User.all.count}"

Song.destroy_all()

s1 = Song.create(:name => 'All by electricity')
s2 = Song.create(:name => 'Marianas Trench')
s3 = Song.create(:name => 'Have a safe trip, dear')

puts "Song count: #{Song.all.count}"


Album.destroy_all()

a1 = Album.create(:name => 'Engine takes to the water')
a2 = Album.create(:name => 'From the vapor to the gasoline')
a3 = Album.create(:name => 'Systems/Layers')

puts "Album count: #{Album.all.count}"

# put s1 into a1's song's collection
a1.songs << s1
a2.songs << s2
a3.songs << s3
# .songs method is defined by has_many songs in the model "album.RB"
#  it gives the song a certain album ID

puts "Song count on first album: #{a1.songs.count}"
puts "Song count on second album: #{a2.songs.count}"
puts "Song count on third album: #{a3.songs.count}"

puts "Album name for first song: #{s1.album.name}"
puts "Album name for second song: #{s2.album.name}"
puts "Album name for third song: #{s3.album.name}"

Genre.destroy_all()

g1 = Genre.create(:name => 'Nautical Text Rock')
g2 = Genre.create(:name => 'Math rock')
g3 = Genre.create(:name => 'Chamber pop')

puts "Genre count: #{Genre.all.count}"

g1.songs << s1 << s2
g2.songs << s2
g3.songs << s3

puts "Genre one song count: #{g1.songs.count}"
puts "Genre two song count: #{g2.songs.count}"
puts "Genre three song count: #{g3.songs.count}"

puts "Song one genre count: #{s1.genres.count}"
puts "Song two genre count: #{s2.genres.count}"
puts "Song three genre count: #{s3.genres.count}"

Artist.destroy_all()

r1 = Artist.create(:name => 'June of 44')
r2 = Artist.create(:name => 'Mercury Program')
r3 = Artist.create(:name => 'Rachels')

puts "Artist count: #{Artist.all.count}"

r1.songs << s1
r2.songs << s2
r3.songs << s3

puts "Song count on first artist: #{r1.songs.count}"
puts "Song count on second artist: #{r2.songs.count}"
puts "Song count on third artist: #{r3.songs.count}"

puts "Artist who wrote song 1: #{s1.artist.name}"
puts "Artist who wrote song 2: #{s2.artist.name}"
puts "Artist who wrote song 3: #{s3.artist.name}"

Mixtape.destroy_all()

m1 = Mixtape.create(:title => 'Fire')
m2 = Mixtape.create(:title => 'Easter tunes')
m3 = Mixtape.create(:title => 'Code jams')

puts "Mixtape count: #{Mixtape.all.count}"

u1.mixtapes << m1
u2.mixtapes << m2 << m3


m1.songs << s1 << s2 << s3
m2.songs << s1 << s2
m3.songs << s1

puts "Mixtape-1 song count: #{m1.songs.count}"
puts "Mixtape-2 song count: #{m2.songs.count}"
puts "Mixtape-3 song count: #{m3.songs.count}"

puts "Song-1 mixtape count: #{s1.mixtapes.count}"
puts "Song-2 mixtape count: #{s2.mixtapes.count}"
puts "Song-3 mixtape count: #{s3.mixtapes.count}"

puts "\n\n Testing has_many :through relationships...\n"
puts "First artist genre count: #{r1.genres.count}"
puts "Second artist genre count: #{r2.genres.count}"
puts "Third artist genre count: #{r3.genres.count}"

puts "First artist album count: #{r1.albums.count}"
puts "Second artist album count: #{r2.albums.count}"
puts "Third artist album count: #{r3.albums.count}"
