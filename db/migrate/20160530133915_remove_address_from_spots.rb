class RemoveAddressFromSpots < ActiveRecord::Migration
  def change
    remove_column :spots, :address, :text
  end
end
