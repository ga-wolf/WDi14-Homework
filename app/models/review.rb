# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  rating     :integer
#  content    :text
#  user_id    :integer
#  spot_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ActiveRecord::Base
end