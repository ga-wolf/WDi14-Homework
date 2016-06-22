# == Schema Information
#
# Table name: tasks
#
#  id          :integer          not null, primary key
#  description :string
#  date        :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Task < ActiveRecord::Base
  belongs_to :clause
  has_one :entity
end
