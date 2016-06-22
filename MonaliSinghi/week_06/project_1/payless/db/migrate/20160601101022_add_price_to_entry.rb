class AddPriceToEntry < ActiveRecord::Migration
  def change
    add_column :shopping_entries, :price, :float
  end
end
