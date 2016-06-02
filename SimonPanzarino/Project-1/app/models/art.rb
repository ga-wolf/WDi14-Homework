class Art < ActiveRecord::Base
  belongs_to :user
  has_many :saves
end
