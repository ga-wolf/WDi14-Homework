# == Schema Information
#
# Table name: activities
#
#  id             :integer          not null, primary key
#  title          :text
#  image          :text
#  equipment_list :text
#  description    :text
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Activity < ActiveRecord::Base
  has_and_belongs_to_many :users
  has_and_belongs_to_many :destinations
end
