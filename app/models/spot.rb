# == Schema Information
#
# Table name: spots
#
#  id          :integer          not null, primary key
#  name        :text
#  description :text
#  region_id   :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  lat         :float
#  lng         :float
#

class Spot < ActiveRecord::Base
  belongs_to :region
end
