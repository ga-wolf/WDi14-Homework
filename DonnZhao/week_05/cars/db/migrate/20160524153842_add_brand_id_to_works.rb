class AddBrandIdToWorks < ActiveRecord::Migration
  def change
    add_column :models, :brand_id, :integer
  end
end
