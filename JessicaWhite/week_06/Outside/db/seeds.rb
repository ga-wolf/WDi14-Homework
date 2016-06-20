User.destroy_all
morelikeapuma = User.create :username => 'more_like_a_puma', :email => 'jwannabel@gmail.com', :name => 'Jessica May', :password => 'chicken', :password_confirmation => 'chicken'

Destination.destroy_all
bondibeach = Destination.create :address => 'Bondi Beach, Sydney, Australia', :country => 'Australia', :terrain => 'seascape', :description => 'World famous surf beach in the heart of Sydney, Australia.', :title => 'Bondi Beach'
bluemountains = Destination.create :address => 'Leura, Blue Mountains', :country => 'Australia', :terrain => 'mountain || forest', :description => 'mountain || forest', :title => 'Blue Mountains'

Activity.destroy_all
climbing = Activity.create :title => 'Rock Climbing', :equipment_list => 'Harness, ropes, carabiners, chalk, climbing shoes', :description => 'Explore the great outdoors vertically. Scale mountain face\'s.'
surfing = Activity.create :title => 'Surfing', :equipment_list => 'Surfboard, wetsuit', :description => 'Let the motion of the ocean push you around at great speed.'
hiking = Activity.create :title => 'Hiking', :equipment_list => 'Hiking boots, appropriate clothing, compass', :description => 'Walk along mountain trails, forests & jungles to explore the world outside.'

morelikeapuma.destinations << bondibeach << bluemountains

morelikeapuma.activities << surfing << climbing

bondibeach.activities << surfing

bluemountains.activities << climbing << hiking
