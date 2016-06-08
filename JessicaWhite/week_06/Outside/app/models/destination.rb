# == Schema Information
#
# Table name: destinations
#
#  id          :integer          not null, primary key
#  address     :text
#  country     :text
#  terrain     :text
#  image       :text
#  description :text
#  title       :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  longitude   :float
#  latitude    :float
#

class Destination < ActiveRecord::Base
  geocoded_by :address
  after_validation :geocode
  has_and_belongs_to_many :activities
  has_and_belongs_to_many :users
end
