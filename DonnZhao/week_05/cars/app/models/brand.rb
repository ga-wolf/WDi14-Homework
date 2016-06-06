class Brand < ActiveRecord::Base
  has_many :models
end

# has many : must be a plural
