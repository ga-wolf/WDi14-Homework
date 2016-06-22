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

require 'test_helper'

class EntityTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
