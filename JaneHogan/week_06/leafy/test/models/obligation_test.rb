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

require 'test_helper'

class ObligationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
