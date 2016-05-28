# == Schema Information
#
# Table name: pictures
#
#  id         :integer          not null, primary key
#  review_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Picture < ActiveRecord::Base
end
