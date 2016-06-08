class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.integer :store_id
      t.text :name
      t.text :category
      t.text :description
      t.text :website
    end
  end
end
