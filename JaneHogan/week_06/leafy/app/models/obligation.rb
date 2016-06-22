# == Schema Information
#
# Table name: obligations
#
#  id             :integer          not null, primary key
#  agreement_name :text
#  agreement_date :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Obligation < ActiveRecord::Base
  has_and_belongs_to_many :entities
  has_many :clauses
  has_many :tasks
end
