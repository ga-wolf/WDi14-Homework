class ShoppingEntry < ActiveRecord::Base
  belongs_to :shopping_list
  has_one :product
end
