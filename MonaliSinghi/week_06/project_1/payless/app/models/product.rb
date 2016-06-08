class Product < ActiveRecord::Base
  belongs_to :store
  has_many :shopping_lists
  has_many :stores, through: :product_prices
end
