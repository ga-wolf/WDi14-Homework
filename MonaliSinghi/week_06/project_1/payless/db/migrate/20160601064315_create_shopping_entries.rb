class CreateShoppingEntries < ActiveRecord::Migration
  def change
    create_table :shopping_entries do |t|
      t.integer :product_id
      t.integer :quantity

      t.timestamps null: false
    end
  end
end
