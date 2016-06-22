class Art < ActiveRecord::Base
  belongs_to :user
  has_many :save_states
end
