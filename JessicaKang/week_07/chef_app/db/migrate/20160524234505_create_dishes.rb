class CreateDishes < ActiveRecord::Migration
  def change
    create_table :dishes do |t|
      t.text :name
      t.text :origin
      t.text :method
      t.text :difficulty
      t.text :image
      t.timestamps null: false
    end
  end
end
