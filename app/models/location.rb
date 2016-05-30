# == Schema Information
#
# Table name: locations
#
#  id         :integer          not null, primary key
#  address    :string
#  latitude   :float
#  longitude  :float
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Location < ActiveRecord::Base
  geocoded_by :address
after_validation :geocode, :if => :address_changed?

end
