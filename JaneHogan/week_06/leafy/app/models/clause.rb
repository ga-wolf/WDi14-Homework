# == Schema Information
#
# Table name: clauses
#
#  id          :integer          not null, primary key
#  name        :string
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Clause < ActiveRecord::Base
  belongs_to :obligation
  has_many :tasks
end
