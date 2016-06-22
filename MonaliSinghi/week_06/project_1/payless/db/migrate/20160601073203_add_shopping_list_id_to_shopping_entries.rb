class AddShoppingListIdToShoppingEntries < ActiveRecord::Migration
  def change
    add_column :shopping_entries, :shopping_list_id, :integer
  end
end
