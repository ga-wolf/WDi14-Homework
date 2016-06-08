class ShoppingList < ActiveRecord::Base
  has_many :shopping_entries
  belongs_to :user
end
