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

FactoryGirl.define do
  factory :phone do
    association :contact
    phone { Faker::PhoneNumber.phone_number}
    factory :home_phone do
      phone_type "Home"
    end
    factory :office_phone do
      phone_type "Office"
    end
    factory :mobile_phone do
      phone_type "Mobile"
    end
  end
end
