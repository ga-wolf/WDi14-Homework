class DeleteStoreIdFromProduct < ActiveRecord::Migration
  def change
    remove_column :products, :store_id
  end
end
