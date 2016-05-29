# == Schema Information
#
# Table name: regions
#
#  id          :integer          not null, primary key
#  name        :text
#  address     :text
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class RegionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
