# == Schema Information
#
# Table name: projects
#
#  id          :integer          not null, primary key
#  title       :text
#  description :text
#  private     :boolean          default(TRUE)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Project < ActiveRecord::Base
  has_and_belongs_to_many :users
  has_many :tasks
end
