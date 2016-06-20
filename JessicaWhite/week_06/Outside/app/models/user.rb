# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :text
#  email           :text
#  image           :text
#  name            :text
#  password_digest :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  has_secure_password
  has_and_belongs_to_many :destinations
  has_and_belongs_to_many :activities
end
