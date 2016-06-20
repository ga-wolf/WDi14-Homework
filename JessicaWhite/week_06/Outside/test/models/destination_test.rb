# == Schema Information
#
# Table name: destinations
#
#  id          :integer          not null, primary key
#  address     :text
#  country     :text
#  terrain     :text
#  image       :text
#  description :text
#  title       :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  longitude   :float
#  latitude    :float
#

require 'test_helper'

class DestinationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
