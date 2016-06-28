class AddChefIdToDishes < ActiveRecord::Migration
  def change
    add_column :dishes, :chef_id, :integer
  end
end
