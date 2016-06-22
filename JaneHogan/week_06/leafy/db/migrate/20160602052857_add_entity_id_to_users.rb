class AddEntityIdToUsers < ActiveRecord::Migration
  def change
    add_column :users, :entity_id, :integer
  end
end
