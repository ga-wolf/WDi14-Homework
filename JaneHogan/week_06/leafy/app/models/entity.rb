# == Schema Information
#
# Table name: entities
#
#  id             :integer          not null, primary key
#  name           :text
#  ACN            :integer
#  address        :text
#  contact        :text
#  contact_number :integer
#  contact_email  :text
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Entity < ActiveRecord::Base
  has_and_belongs_to_many :obligations
  has_many :users
  has_many :tasks, :through => :obligations
end
