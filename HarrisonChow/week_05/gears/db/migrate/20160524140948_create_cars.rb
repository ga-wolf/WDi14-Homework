class CreateCars < ActiveRecord::Migration
  def change
    create_table :cars do |t|
      t.text :model
      t.text :year
      t.text :image
      t.text :description
      t.integer :make_id

      t.timestamps null: false
    end
  end
end
