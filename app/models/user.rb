# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  name            :text             not null
#  email           :text             not null
#  password_digest :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  has_secure_password

end
