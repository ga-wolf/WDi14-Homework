# == Schema Information
#
# Table name: phones
#
#  id         :integer          not null, primary key
#  contact_id :integer
#  phone      :string
#  phone_type :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Phone < ActiveRecord::Base
  belongs_to :contact
end
