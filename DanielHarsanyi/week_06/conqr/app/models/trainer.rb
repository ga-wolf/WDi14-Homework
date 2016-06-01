class Trainer < ActiveRecord::Base
  has_secure_password

  geocoded_by :preferred_location
  after_validation :geocode
end
