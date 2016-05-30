# == Schema Information
#
# Table name: tasks
#
#  id          :integer          not null, primary key
#  title       :text
#  description :text
#  complete    :boolean          default(FALSE)
#  project_id  :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Task < ActiveRecord::Base
  belongs_to :project
end
