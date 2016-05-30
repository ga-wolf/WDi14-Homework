# t.text :name
# t.text :email
# t.text :password_digest
# t.text :training_interest_areas
# t.text :preferred_training_style
# t.inet :current_location
# t.text :preferred_location
# t.boolean :admin, :default => "false"
# t.text :image

Client.destroy_all

Client.create :name =>  "Dan Harsanyi", :email => "dan@conqr.co", :training_interest_areas => "Bodybuilding", :admin => "true", :preferred_training_style => "Drill Sergeant", :preferred_location => "Crunch Fitness Chastwood, 1, Chatswood Central, 1-5 Railway St, Chatswood NSW 2067", :image => "https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-9/11218457_10206265371305109_2708158339490873143_n.jpg?oh=db021c5a08c36e453eae4fc52e55b09f&oe=580EEB5E&__gda__=1474090824_7e4f84a043557d2b29dcfddbe0060097"

Client.create :name => "Nikole Music", :email => "nikolemusic@hotmail.com", :training_interest_areas => "Weight Loss", :preferred_training_style => "Cheerleader", :image => "https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-9/13245303_10153707614947684_7768312184747722579_n.jpg?oh=9e5efeecf317fd113c4caf20e3ffc077&oe=580F7A2D&__gda__=1474074427_1c6b89835a0443caeb5df83e7e99e448"

Client.create :name => "Kent Goldingay", :email => "contact@kentgoldingay.com", :admin => "true", :training_interest_areas => "Functional Fitness", :preferred_training_style => "Drill Sergeant", :image => "https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xfa1/t31.0-8/11157466_10153179428010519_4425110414919682029_o.jpg"

# t.text :name
# t.text :email
# t.text :password_digest
# t.integer :fitness_australia_id
# t.boolean :approved_status, :default => "false"
# t.text :qualifications
# t.text :training_specialty_areas
# t.text :training_style
# t.inet :current_location
# t.text :preferred_location
# t.integer :price
# t.integer :rating
# t.text :image

Trainer.destroy_all

Trainer.create :name => "Brett Smith", :email => "brett.smith@trainers.com", :fitness_australia_id => "031404", :approved_status => "true", :qualifications => "Level 3", :training_specialty_areas => "Strength and conditioning", :training_style => "Relaxed", :price => "80", :rating => "4", :image => "https://fitnessaustralia.s3.amazonaws.com/uploads/contact_detail/photo/11764/standard_mbs053.jpg"

Trainer.create :name => "Scott Ryan", :email => "scott.ryan@trainers.com", :fitness_australia_id => "016181", :approved_status => "true", :qualifications => "Level 2", :training_specialty_areas => "Strength and conditioning, Body recomp", :training_style => "Drill Sergeant", :price => "90", :rating => "5", :image => "https://fitnessaustralia.s3.amazonaws.com/uploads/contact_detail/photo/40043/standard_Scott_photo.jpg"

Trainer.create :name => "Kelly Bray", :email => "kelly.bray@trainers.com", :fitness_australia_id => "082050", :qualifications => "Level 2", :training_specialty_areas => "Nutrition", :training_style => "Cheerleader", :price => "75", :rating => "3 ", :image => "https://fitnessaustralia.s3.amazonaws.com/uploads/contact_detail/photo/50920/standard_beach_062.jpg"


# t.text :location
# t.datetime :date
# t.integer :client_id
# t.integer :trainer_id
# t.integer :price_id
# t.integer :rating_id

# Session.destroy_all
