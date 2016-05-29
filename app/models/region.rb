# == Schema Information
#
# Table name: regions
#
#  id          :integer          not null, primary key
#  name        :text             not null
#  address     :text             not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Region < ActiveRecord::Base
  has_many :sopts
end
