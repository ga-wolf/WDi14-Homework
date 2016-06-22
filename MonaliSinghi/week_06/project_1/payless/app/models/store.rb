class Store < ActiveRecord::Base
  has_many :products
  has_many :products, through: :product_prices
end
