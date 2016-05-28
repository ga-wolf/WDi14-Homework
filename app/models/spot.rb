# == Schema Information
#
# Table name: spots
#
#  id          :integer          not null, primary key
#  name        :text
#  address     :text
#  description :text
#  reveiw_id   :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Spot < ActiveRecord::Base
end
