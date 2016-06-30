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

require 'rails_helper'

RSpec.describe Phone, type: :model do

  it "has a valid factory" do
    phone = build(:home_phone)
    expect(phone).to be_valid
  end

  it "is able to access the correct contact" do
    contact = build :contact
    phone = build :mobile_phone, contact: contact
    expect(phone.contact).to be(contact)
  end

end
