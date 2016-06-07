# t.text    "name"
# t.text    "email"
# t.text    "password_digest"
# t.text    "training_interest_areas"
# t.text    "preferred_training_style"
# t.inet    "current_location"
# t.text    "preferred_location"
# t.boolean "admin",                    default: false
# t.text    "image"
# t.float   "latitude"
# t.float   "longitude"

Client.destroy_all

Client.create :name =>  "Dan Harsanyi", :email => "dan@conqr.co", :training_interest_areas => "Body Building", :password => "chicken", :password_confirmation => "chicken", :preferred_training_style => "Drill Sergeant", :preferred_location => "Chatswood NSW", :admin => "true", :image => "https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-9/11218457_10206265371305109_2708158339490873143_n.jpg?oh=db021c5a08c36e453eae4fc52e55b09f&oe=580EEB5E&__gda__=1474090824_7e4f84a043557d2b29dcfddbe0060097"

Client.create :name =>  "Nikole Music", :email => "nikolemusic@hotmail.com", :training_interest_areas => "Weight Loss", :password => "chicken", :password_confirmation => "chicken", :preferred_training_style => "Encourager", :preferred_location => "Manly NSW", :admin => "false", :image => "https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-9/13245303_10153707614947684_7768312184747722579_n.jpg?oh=9e5efeecf317fd113c4caf20e3ffc077&oe=580F7A2D&__gda__=1474074427_1c6b89835a0443caeb5df83e7e99e448"

Client.create :name =>  "Kent Goldingay", :email => "contact@kentgoldingay.com", :training_interest_areas => "Body Building", :password => "chicken", :password_confirmation => "chicken", :preferred_training_style => "Drill Sergeant", :preferred_location => "Lindfield NSW", :admin => "true", :image => "https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xfa1/t31.0-8/11157466_10153179428010519_4425110414919682029_o.jpg"

# t.text    "name"
# t.text    "email"
# t.text    "password_digest"
# t.integer "fitness_australia_id"
# t.boolean "approved_status",          default: false
# t.text    "qualifications"
# t.text    "training_specialty_areas"
# t.text    "training_style"
# t.inet    "current_location"
# t.text    "preferred_location"
# t.integer "price"
# t.integer "rating"
# t.text    "image"
# t.float   "latitude"
# t.float   "longitude"

Trainer.destroy_all

Trainer.create :name => "Brett Smith", :email => "brett.smith@trainers.com", :password => "chicken", :password_confirmation => "chicken", :fitness_australia_id => "031404", :approved_status => "true", :qualifications => "Level 3", :training_specialty_areas => "Body Building", :training_style => "Drill Sergeant", :preferred_location => "Manly NSW", :price => "80", :rating => "4", :image => "https://fitnessaustralia.s3.amazonaws.com/uploads/contact_detail/photo/11764/standard_mbs053.jpg"

Trainer.create :name => "Scott Ryan", :email => "scott.ryan@trainers.com", :password => "chicken", :password_confirmation => "chicken", :fitness_australia_id => "016181", :approved_status => "true", :qualifications => "Level 2", :training_specialty_areas => "Body Building", :training_style => "Drill Sergeant", :price => "90", :rating => "5", :image => "https://fitnessaustralia.s3.amazonaws.com/uploads/contact_detail/photo/40043/standard_Scott_photo.jpg"

Trainer.create :name => "Kelly Bray", :email => "kelly.bray@trainers.com", :password => "chicken", :password_confirmation => "chicken", :fitness_australia_id => "082050", :qualifications => "Level 2", :training_specialty_areas => "Nutrition", :training_style => "Holistic", :price => "75", :rating => "3", :image => "https://fitnessaustralia.s3.amazonaws.com/uploads/contact_detail/photo/50920/standard_beach_062.jpg"
