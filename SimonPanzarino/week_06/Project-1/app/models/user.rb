# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string
#  image           :text
#  password_digest :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  has_secure_password
  has_many :arts
  has_many :save_states
end
