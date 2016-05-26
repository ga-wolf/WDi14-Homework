class AddHouseIdToPerfumes < ActiveRecord::Migration
  def change
    add_column :perfumes, :house_id, :integer
  end
end
